import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../views/admin/dashboard";
import AdminLayout from "@/layouts/adminLayout";
import Grants from "@/views/admin/Grants";
import AdminApplications from "@/views/admin/Applications";
import GrantApplications from "@/views/admin/Grants/grantApplications";
import CountyProfiles from "@/views/admin/countyProfiles";
import AdminUsers from "@/views/admin/users";
import AdminReports from "@/views/admin/Reports";
import AdminReportsListing from "@/views/admin/Reports/reportsListing";
import AdminCountyDetail from "@/views/admin/countyDetail";
import AdminGrantDetail from "@/views/admin/Grants/grantDetails";

export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/grants" element={<Grants />} />
        <Route
          path="/grants/:id/applications"
          element={<GrantApplications />}
        />

        <Route
          path="/grants/:id/applications/view"
          element={<AdminGrantDetail />}
        />

        <Route path="/county-profiles" element={<CountyProfiles />} />
        <Route path="/county-profiles/:id" element={<AdminCountyDetail />} />

        <Route path="/users" element={<AdminUsers />} />
        <Route path="/reports" element={<AdminReports />} />
        <Route path="/reports/:id" element={<AdminReportsListing />} />

        <Route path="/applications" element={<AdminApplications />} />

        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </AdminLayout>
  );
};
export default AdminRoutes;
