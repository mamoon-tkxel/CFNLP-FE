import axios from "axios";
import { resetAuthUser } from "@/store/slices/authSlice";
import { store } from "@/store/store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requestHandler = (request: any) => {
  const token = localStorage.getItem("accessToken") || "";
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const successHandler = (response: any) => {
  return response?.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (error: any) => {
  if (error?.response?.status === 401) {
    const { dispatch } = store;
    dispatch(resetAuthUser());
  }
  return Promise.reject(error);
};

const httpCall = (
  config = {
    headers: { contentType: "application/json" },
  }
) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": config.headers.contentType || "application/json",
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(successHandler, errorHandler);

  return instance;
};

export default httpCall;
