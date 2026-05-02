import { Suspense, type FC } from "react";
import { useRoutes } from "react-router-dom";

import WebMainLayout from "@/modules/website/layouts/WebMainLayout";
import AdminLayout from "@/modules/admin-dashboard/layouts/AdminLayout";
import { webPublicRoutes } from "@/modules/website/routes/WebPublicRoutes";
import { webPrivateRoutes } from "@/modules/website/routes/WebPrivateRoutes";
import { AdminRoutes } from "@/modules/admin-dashboard/routes/AdminRoutes";
import NotFoundPage from "@/shared/pages/NotFoundPage";

export const AppRouter: FC = () => {
  const routes = [
    {
      path: "/",
      element: <WebMainLayout />,
      children: [...webPublicRoutes, ...webPrivateRoutes],
    },

    {
      path: "/admin",
      element: <AdminLayout />,
      children: [...AdminRoutes],
    },

    { path: "*", element: <NotFoundPage /> },
  ];
  return (
    <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
  );
};
