import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignIn from "@/views/admin/signIn";
import AdminRoutes from "./adminRoutes";
import  {TestComponent}  from "../components/TestComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<AdminSignIn />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/test-component" element={<TestComponent/>} />
      <Route path="/" element={<Navigate to="/sign-in" />} />

    </Routes>
  );
};

export default AppRoutes;
