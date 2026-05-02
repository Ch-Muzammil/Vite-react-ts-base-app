import { QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { ApiError } from "@/types/api.types";

const shouldRetry = (failureCount: number, error: unknown): boolean => {
  const status = (error as AxiosError<ApiError>)?.response?.status;
  if (status === 401 || status === 403 || status === 404) return false;
  return failureCount < 2;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetry,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
