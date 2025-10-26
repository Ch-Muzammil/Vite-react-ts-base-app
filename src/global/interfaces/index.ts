import type { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface RequireRoleProps {
  allowedRoles: number[]; 
  userRole: number;         
  children: ReactNode;
}