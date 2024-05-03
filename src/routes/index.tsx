import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignIn from "@/views/admin/signIn";
import AdminRoutes from "./adminRoutes";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const AppRoutes = () => {
  const { isAuthenticated } =
    useSelector((state: RootState) => state.auth) || {};

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/admin/*" element={<AdminRoutes />} />
      ) : (
        <Route path="/sign-in" element={<AdminSignIn />} />
      )}

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/admin" : "/sign-in"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
