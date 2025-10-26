import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (!navigator.onLine) {
      toast.error("No internet connection");
      throw new Error("No internet connection");
    }

    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.error("Session expired, please login again");
      window.location.href = "/login";
      throw new Error("No auth token found");
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    toast.error("Request setup failed");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      toast.error("Request timed out");
    }

    if (!navigator.onLine) {
      toast.error("You are offline");
    }

    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.error("Unauthorized, please login again");
      window.location.href = "/login";
    }

    if (error.response?.status === 403) {
      toast.error("Permission denied");
    }

    if (error.response?.status >= 500) {
      toast.error("Server error, please try later");
    }

    return Promise.reject(error);
  }
);

export default api;
