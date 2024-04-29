import { Routes, Route } from "react-router-dom";
import AdminSignIn from "@/views/admin/signIn";
import AdminRoutes from "./adminRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<AdminSignIn />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/" element={<>check</>} />
    </Routes>
  );
};

export default AppRoutes;
