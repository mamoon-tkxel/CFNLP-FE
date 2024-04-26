import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../views/admin/dashboard";
import AdminLayout from "@/layouts/adminLayout";

export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </AdminLayout>
  );
};
export default AdminRoutes;
