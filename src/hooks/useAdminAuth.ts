import { USERS_LOGIN } from "@/constants/apiEndPoints";
import { DynamicObject } from "@/constants/types";
import { SIGN_IN_VALUES } from "@/constants/types/forms";
import httpCall from "@/httpRequests";
import { loginSuccess } from "@/store/slices/authSlice";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAdminAuth = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Simple Email and Password Login
  const handleSubmitLogin = async (values: SIGN_IN_VALUES) => {
    try {
      setErrorMessage("");
      setLoading(true);
      const response: DynamicObject = await httpCall().post(
        USERS_LOGIN,
        values
      );
      if (response?.isError) {
        setErrorMessage(response?.message);
      } else {
        dispatch(loginSuccess(response?.data));
        navigate("/admin");
      }
      setLoading(false);
    } catch (error) {
      let message = "Some thing went wrong";
      if (error instanceof Error) message = error?.message;
      setLoading(false);
      console.log(message);
      setErrorMessage(message);
    }
  };

  return {
    loading,
    errorMessage,
    handleSubmitLogin,
  };
};

export default useAdminAuth;
