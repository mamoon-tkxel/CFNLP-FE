import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

export const createGrantValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  type: Yup.string().required("Type is required"),
  deadlineDate: Yup.string().required("Date is required"),
});

export const createCountyProfileValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Type is required"),
  organizationName: Yup.string().required("Date is required"),
});

export const createAdminUserValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Type is required"),
});
