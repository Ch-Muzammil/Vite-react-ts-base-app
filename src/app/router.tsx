import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import WebMainLayout from "@modules/website/layouts/WebMainLayout";
import AdminLayout from "@src/modules/admin-dashboard/layouts/AdminLayout";

import { webPublicRoutes } from "@modules/website/routes/WebPublicRoutes";
import { webPrivateRoutes } from "@modules/website/routes/WebPrivateRoutes";
import { AdminRoutes } from "@modules/admin-dashboard/routes/AdminRoutes";
import NotFoundPage from "@src/shared/pages/NotFoundPage";

export const AppRouter: React.FC = () => {
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
