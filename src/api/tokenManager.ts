import type { TokenPayload } from "@/types/api.types";

export const STORAGE_KEYS = {
  TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user",
} as const;

const safeStorage = {
  get: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* quota exceeded or SSR */
    }
  },
  remove: (...keys: string[]): void => {
    try {
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
  },
};

export const tokenManager = {
  getAccessToken: () => safeStorage.get(STORAGE_KEYS.TOKEN),
  getRefreshToken: () => safeStorage.get(STORAGE_KEYS.REFRESH_TOKEN),

  setTokens: (access: string, refresh?: string) => {
    safeStorage.set(STORAGE_KEYS.TOKEN, access);
    if (refresh) safeStorage.set(STORAGE_KEYS.REFRESH_TOKEN, refresh);
  },

  clearAll: () =>
    safeStorage.remove(
      STORAGE_KEYS.TOKEN,
      STORAGE_KEYS.REFRESH_TOKEN,
      STORAGE_KEYS.USER
    ),

  isAccessTokenExpired: (): boolean => {
    const token = safeStorage.get(STORAGE_KEYS.TOKEN);
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1])) as TokenPayload;
      return payload.exp * 1000 < Date.now() + 10_000;
    } catch {
      return true;
    }
  },
};
