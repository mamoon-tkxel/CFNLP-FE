import { USERS_LOGIN } from "@/constants/apiEndPoints";
import { DynamicObject } from "@/constants/types";
import { SIGN_IN_VALUES } from "@/constants/types/forms";
import httpCall from "@/helpers/httpRequests";
import { showToaster } from "@/helpers/utils";
import { loginSuccess } from "@/store/slices/authSlice";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAdminAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Simple Email and Password Login
  const handleSubmitLogin = async (values: SIGN_IN_VALUES) => {
    try {
      setLoading(true);
      const response: DynamicObject = await httpCall().post(
        USERS_LOGIN,
        values
      );
      if (response?.isError) {
        showToaster("error", response?.message);
      } else {
        dispatch(loginSuccess(response?.data));
      }
      console.log(response);
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      let message = "Some thing went wrong";
      if (error instanceof Error) message = error?.message;
      setLoading(false);
      console.log(message);
      showToaster("error", message);
    }
  };

  return {
    loading,
    handleSubmitLogin,
  };
};

export default useAdminAuth;
