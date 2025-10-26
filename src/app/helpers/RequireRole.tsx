import React from "react";
import { Navigate } from "react-router-dom";
import type { RequireRoleProps } from "@src/global/interfaces";

const RequireRole: React.FC<RequireRoleProps> = ({
  allowedRoles,
  userRole,
  children,
}) => {
  if (allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  return <Navigate to="/not-authorized" replace />;
};

export default RequireRole;
