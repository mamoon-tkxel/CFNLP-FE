import { Formik, FormikHelpers, Form } from "formik";
import { InputField } from "@/components/InputFields";
import { SwitchButton } from "@/components/SwitchButton";
import { SelectField } from "@/components/SelectField";
import { ButtonComponent } from "@/components/Button";
import { ADMIN_CREATE_COUNTY_PROFILE_VALUES } from "@/constants/types/forms";
import { createCountyProfileValidationSchema } from "@/utils/validations/AdminForms";
import { Divider, Stack, Typography } from "@mui/material";
import { crossIcon } from "@/assets/svgs";

interface CREATE_COUNTY_TYPES {
  initialValues: ADMIN_CREATE_COUNTY_PROFILE_VALUES;
  closeDrawer: () => void;
}

const TYPE_OPTIONS = [
  {
    label: "TYPE",
    value: "type",
  },
];

const CreateCountyProfile = ({
  initialValues,
  closeDrawer,
}: CREATE_COUNTY_TYPES) => {
  const handleSubmit = (
    values: ADMIN_CREATE_COUNTY_PROFILE_VALUES,
    { setSubmitting }: FormikHelpers<ADMIN_CREATE_COUNTY_PROFILE_VALUES>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        padding="16px"
        // position={"relative"}
      >
        <Typography className="f-20 lh-23 f-w-500">
          Add County Profile
        </Typography>
        <span onClick={closeDrawer}> {crossIcon}</span>
      </Stack>
      <Divider />
      <Stack
        sx={{
          maxHeight: "calc(100vh - 120px)",
          overflowY: "auto",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={createCountyProfileValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Stack gap="24px" padding="24px">
                <InputField
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  className="textField textFieldError"
                  error={!!errors.firstName}
                  errorInputField={errors.firstName || touched.firstName}
                />

                <InputField
                  name="lastName"
                  label="Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  className="textField textFieldError"
                  error={!!errors.lastName}
                  errorInputField={errors.lastName || touched.lastName}
                />

                <InputField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  label="Email"
                  placeholder="e.g. john.doe@example.com"
                  type="text"
                  className="textFieldError"
                />

                {errors.email && touched.email && errors.email}
                <InputField
                  name="organizationName"
                  label="Organization Name"
                  type="text"
                  value={values.organizationName}
                  onChange={handleChange}
                  className="textField textFieldError"
                />

                {errors.organizationName &&
                  touched.organizationName &&
                  errors.organizationName}
                <SelectField
                  label="County Type"
                  value={values.type}
                  name="type"
                  onChange={handleChange}
                  className="drop-down-grant-type select"
                  options={TYPE_OPTIONS}
                />
                {errors.type && touched.type && errors.type}

                <SwitchButton
                  name="sendInvitation"
                  onChange={handleChange}
                  defaultChecked={!!values.sendInvitation}
                  label={"Send Invite"}
                  sx={{ width: "36px", height: "20px", borderRadius: "12px" }}
                />
              </Stack>
              <Stack
                position="absolute"
                bottom={0}
                boxShadow="0px -4px 16px 0px #00000014"
                padding="14px 24px"
                alignItems={"end"}
                width="100%"
              >
                <ButtonComponent
                  text="save"
                  type="submit"
                  variant="contained"
                  className="bg-clr-primary-blue-700 b-radius-8 h-44"
                />
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
};

export default CreateCountyProfile;
