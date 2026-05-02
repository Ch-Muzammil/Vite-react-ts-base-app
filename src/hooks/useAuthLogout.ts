import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { queryClient } from "@/lib/queryClient";

export const useAuthLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      queryClient.clear();
      void navigate("/login", { replace: true });
    };

    window.addEventListener("auth:logout", handleLogout);
    return () => window.removeEventListener("auth:logout", handleLogout);
  }, [navigate]);
};
