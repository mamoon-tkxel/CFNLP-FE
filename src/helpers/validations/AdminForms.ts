import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const createGrantValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  type: Yup.string().required("Type is required"),
  deadlineDate: Yup.date().required("Date is required"),
});
