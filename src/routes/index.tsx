import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignIn from "@/views/admin/signIn";
import AdminRoutes from "./adminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<AdminSignIn />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default AppRoutes;
