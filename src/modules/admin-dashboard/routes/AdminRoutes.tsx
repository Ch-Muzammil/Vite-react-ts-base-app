import AdminDashboard from "../pages/AdminDashboard";
import UserManagement from "../pages/UserManagement";

export const AdminRoutes = [
  { index: true, element: <AdminDashboard /> },
  { path: "user", element: <UserManagement /> },
];
