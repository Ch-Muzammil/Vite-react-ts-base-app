import axios, { AxiosHeaders, isAxiosError } from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { toast } from "sonner";

import api from "@/api/axiosInstance";
import { tokenManager } from "@/api/tokenManager";
import type { RefreshTokenResponse } from "@/types/api.types";

const activeToasts = new Set<string>();

const showToastOnce = (key: string, message: string) => {
  if (activeToasts.has(key)) return;
  activeToasts.add(key);
  toast.error(message, {
    onDismiss: () => {
      activeToasts.delete(key);
    },
    onAutoClose: () => {
      activeToasts.delete(key);
    },
  });
};

export const dispatchLogout = () => {
  window.dispatchEvent(new Event("auth:logout"));
};

const apiBase = () => (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

let isRefreshing = false;
let refreshQueue: {
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}[] = [];

let refreshInFlight: Promise<string> | null = null;

const processQueue = (error: unknown, token: string | null) => {
  refreshQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else if (token) resolve(token);
    else reject(new Error("Token refresh failed"));
  });
  refreshQueue = [];
};

const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = tokenManager.getRefreshToken();
  if (!refreshToken) throw new Error("No refresh token");

  const { data } = await axios.post<RefreshTokenResponse>(
    `${apiBase()}/auth/refresh`,
    { refreshToken }
  );

  tokenManager.setTokens(data.accessToken, data.refreshToken);
  return data.accessToken;
};

/** Single in-flight refresh for proactive + 401 paths (avoids duplicate /auth/refresh). */
function startTokenRefresh(): Promise<string> {
  refreshInFlight ??= refreshAccessToken().finally(() => {
    refreshInFlight = null;
  });
  return refreshInFlight;
}

const IDEMPOTENT = new Set(["get", "head", "options"]);

axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount, err) =>
    axiosRetry.exponentialDelay(retryCount, err),
  retryCondition: (error: AxiosError) => {
    const method = error.config?.method?.toLowerCase() ?? "";
    return (
      axiosRetry.isNetworkError(error) ||
      (error.response?.status === 503 && IDEMPOTENT.has(method))
    );
  },
});

function setAuthHeader(
  config: InternalAxiosRequestConfig,
  token: string
): void {
  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }
  if (config.headers instanceof AxiosHeaders) {
    config.headers.set("Authorization", `Bearer ${token}`);
  } else {
    (config.headers as Record<string, string>).Authorization =
      `Bearer ${token}`;
  }
}

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!navigator.onLine) {
      showToastOnce("offline", "You appear to be offline");
      return Promise.reject(new Error("No internet connection"));
    }

    if (tokenManager.isAccessTokenExpired()) {
      try {
        const newToken = await startTokenRefresh();
        setAuthHeader(config, newToken);
        return config;
      } catch {
        /* response interceptor may handle 401 */
      }
    }

    const token = tokenManager.getAccessToken();
    if (token && !tokenManager.isAccessTokenExpired()) {
      setAuthHeader(config, token);
    }

    return config;
  },
  (error: unknown) =>
    Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    )
);

api.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!isAxiosError(error)) {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error))
      );
    }

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!originalRequest) {
      return Promise.reject(error);
    }

    const status = error.response?.status;
    const url = originalRequest.url ?? "";
    const isRefreshCall = url.includes("/auth/refresh");

    if (status === 401 && !originalRequest._retry && !isRefreshCall) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        }).then((token) => {
          setAuthHeader(originalRequest, token);
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await startTokenRefresh();
        processQueue(null, newToken);
        setAuthHeader(originalRequest, newToken);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenManager.clearAll();
        showToastOnce("unauthorized", "Session expired — please log in again");
        dispatchLogout();
        return Promise.reject(
          refreshError instanceof Error
            ? refreshError
            : new Error(String(refreshError))
        );
      } finally {
        isRefreshing = false;
      }
    }

    if (error.code === "ECONNABORTED") {
      showToastOnce("timeout", "Request timed out");
    } else if (!navigator.onLine) {
      showToastOnce("offline", "You seems to be offline, please check your internet connection");
    } else if (status === 403) {
      showToastOnce("forbidden", "You are not authorized to access this resource");
    } else if ((status ?? 0) >= 500) {
      showToastOnce("server-error", "Server error — please try again later");
    }

    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

export default api;
