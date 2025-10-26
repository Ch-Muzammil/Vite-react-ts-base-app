import { lazy } from "react";

import HomePage from "../pages/HomePage";
const AboutUs = lazy(() => import("@modules/website/pages/AboutUs"));


export const webPublicRoutes = [
  { index: true, element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
];
