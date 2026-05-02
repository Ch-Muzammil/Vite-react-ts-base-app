import type { FC } from "react";
import { Navigate } from "react-router-dom";
import type { RequireRoleProps } from "@/global/interfaces";

const RequireRole: FC<RequireRoleProps> = ({
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
