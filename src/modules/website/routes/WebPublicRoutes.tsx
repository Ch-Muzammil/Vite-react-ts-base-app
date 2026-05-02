import { lazy } from "react";

import HomePage from "../pages/HomePage";

const AboutUs = lazy(() => import("@/modules/website/pages/AboutUs"));
const UiShowcasePage = lazy(
  () => import("@/modules/website/pages/UiShowcasePage")
);

export const webPublicRoutes = [
  { index: true, element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/ui-showcase", element: <UiShowcasePage /> },
];
