import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../views/admin/dashboard";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
export default AdminRoutes;
