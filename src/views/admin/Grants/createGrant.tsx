import { Formik, FormikHelpers, Form } from "formik";
import { InputField } from "@/components/InputFields";
import { SwitchButton } from "@/components/SwitchButton";
import { SelectField } from "@/components/SelectField";
import { ButtonComponent } from "@/components/Button";
import { ADMIN_CREATE_GRANT_VALUES } from "@/constants/types/forms";
import { createGrantValidationSchema } from "@/utils/validations/AdminForms";
import { Divider, Stack, Typography } from "@mui/material";
import { crossIcon } from "@/assets/svgs";
import { getCurrentDate } from "@/utils/helpers";

interface CREATE_GRANT_TYPES {
  initialValues: ADMIN_CREATE_GRANT_VALUES;
}

const TYPE_OPTIONS = [
  {
    label: "TYPE",
    value: "type",
  },
];

const CreateGrant = ({ initialValues }: CREATE_GRANT_TYPES) => {
  const handleSubmit = (
    values: ADMIN_CREATE_GRANT_VALUES,
    { setSubmitting }: FormikHelpers<ADMIN_CREATE_GRANT_VALUES>
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
        <Typography className="f-20 lh-23 f-w-500">Add Grant</Typography>
        {crossIcon}
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
          validationSchema={createGrantValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Stack gap="24px" padding="24px">
                <InputField
                  name="title"
                  label="Grant Title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  className="textField textFieldError"
                  error={!!errors.title}
                  errorInputField={errors.title || touched.title}
                />

                <InputField
                  label="Description"
                  name="description"
                  placeholder="Enter a description..."
                  multiline
                  rows={4}
                  value={values.description}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "8px",
                    border: "1px solid #DFE2E8",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                  }}
                />

                <SelectField
                  label="Grant Type"
                  value={values.type}
                  name="type"
                  onChange={handleChange}
                  className="drop-down-grant-type select"
                  options={TYPE_OPTIONS}
                  errorSelect={errors.type}
                />

                <InputField
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  label="Grant Amount per charter"
                  type="number"
                  placeholder="$0.00"
                  className="textField"
                />
                <InputField
                  value={values.deadlineDate}
                  onChange={handleChange}
                  name="deadlineDate"
                  label="Application Deadline"
                  type="date"
                  className="textField"
                  inputProps={{
                    min: getCurrentDate(),
                  }}
                />
                <>
                  {errors.deadlineDate &&
                    touched.deadlineDate &&
                    errors?.deadlineDate}
                </>

                <SwitchButton
                  name="sendInvitation"
                  onChange={handleChange}
                  defaultChecked={!!values.sendInvitation}
                  label={"Send Grant Invitation to Counties"}
                  sx={{ width: "36px", height: "20px", borderRadius: "12px" }}
                />

                <SwitchButton
                  label={values.status ? "Active" : "InActive"}
                  defaultChecked={!!values.status}
                  name="status"
                  onChange={handleChange}
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

export default CreateGrant;
