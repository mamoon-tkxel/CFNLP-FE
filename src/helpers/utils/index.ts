import { toast } from "react-toastify";

export const getCurrentDate = () => new Date().toISOString().split("T")[0];

export const showToaster = (status: string, message: string) => {
  if (status === "Success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
