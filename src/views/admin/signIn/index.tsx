import { Formik, FormikHelpers, Form } from "formik";

import { ButtonComponent } from "@/components/Button";
import { CheckboxField } from "@/components/Checkbox";
import { InputField } from "@/components/InputFields";
import { Logo } from "@/components/logo";
import { Stack, Typography } from "@mui/material";
import { SIGN_IN_VALUES } from "@/constants/types/forms";
import { signInValidationSchema } from "@/helpers/validations/AdminForms";

const AdminSignIn = () => {
  const initialValues: SIGN_IN_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: SIGN_IN_VALUES,
    { setSubmitting }: FormikHelpers<SIGN_IN_VALUES>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F0F2F6",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Stack
        sx={{
          width: "462px",
          padding: "56px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
        }}
        gap="24px"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={signInValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Stack>
                <Stack alignItems="center" gap="32px">
                  <Logo />
                  <Stack alignItems="center" gap={1}>
                    <Typography
                      variant="h3"
                      className="f-32 lh-48 f-w-800 clr-pure-black"
                    >
                      Welcome Back!
                    </Typography>
                    <Typography
                      variant="body1"
                      className="f-16 lh-24 f-w-400 clr-gray-500"
                    >
                      Please enter your details
                    </Typography>
                  </Stack>
                </Stack>
                <Stack gap="24px">
                  <InputField
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    label="Email"
                    placeholder="e.g. john.doe@example.com"
                    type="text"
                    error={errors.email && touched.email && errors.email}
                    helperText={errors.email}
                    sx={{
                      "& .MuiFormHelperText-root.Mui-error": {
                        position: "absolute",
                        top: "100%",
                        margin: 0,
                        marginTop: "4px",
                      },
                    }}
                  />

                  {/* {errors.email && touched.email && errors.email} */}

                  <InputField
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    label="Password"
                    placeholder="********"
                    type="password"
                    error={
                      errors.password && touched.password && errors.password
                    }
                    helperText={errors.password}
                    sx={{
                      "& .MuiFormHelperText-root.Mui-error": {
                        position: "absolute",
                        top: "100%",
                        margin: 0,
                        marginTop: "4px",
                      },
                    }}
                  />

                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack flexDirection="row" alignItems="center">
                      <CheckboxField
                        className=""
                        title="Remember for 30 days"
                      />
                    </Stack>
                    <Typography className="f-14 lh-20 f-w-400 clr-gray-1000">
                      Forgot Password
                    </Typography>
                  </Stack>
                  <ButtonComponent
                    text="Log In"
                    type="submit"
                    variant="contained"
                    className="bg-clr-primary-blue-700 b-radius-8"
                    fullWidth
                  />
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
};
export default AdminSignIn;
