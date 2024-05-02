import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../views/admin/dashboard";
import AdminLayout from "@/layouts/adminLayout";
import Grants from "@/views/admin/Grants";
import AdminApplications from "@/views/admin/Applications";

export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/applications" element={<AdminApplications />} />

        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </AdminLayout>
  );
};
export default AdminRoutes;
