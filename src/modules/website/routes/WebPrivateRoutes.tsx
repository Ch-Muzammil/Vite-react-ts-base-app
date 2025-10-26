import { lazy } from "react";

const BookingDetail = lazy(
  () => import("@modules/website/pages/BookingDetail")
);
export const webPrivateRoutes = [
  { path: "/booking", element: <BookingDetail /> },
];
