import { Formik, FormikHelpers, Form } from "formik";

import { InputField } from "@/components/InputFields";
import { SwitchButton } from "@/components/SwitchButton";
import { SelectField } from "@/components/SelectField";
import { TextArea } from "@/components/TextAreaField";
import { ButtonComponent } from "@/components/Button";
import { ADMIN_CREATE_GRANT_VALUES } from "@/constants/types/forms";
import { createGrantValidationSchema } from "@/helpers/validations/AdminForms";
import { Divider, Stack, Typography } from "@mui/material";
import { crossIcon } from "@/assets/svgs";

interface CREATE_GRANT_TYPES {
  initialValues: ADMIN_CREATE_GRANT_VALUES;
}

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
      <Stack flexDirection="row" justifyContent="space-between" padding="16px">
        <Typography className="f-20 lh-23 f-w-500">Add Grant</Typography>
        {crossIcon}
      </Stack>
      <Divider />
      <Stack padding="24px">
        <Formik
          initialValues={initialValues}
          validationSchema={createGrantValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Stack gap="24px">
                <InputField
                  name="title"
                  label="Grant Title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "8px",
                    border: "1px solid #DFE2E8",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                  }}
                />
                {errors.title && touched.title && errors.title}

                <InputField
                  label="Description"
                  name="description"
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

                <SelectField label="Grant Type" />
                {errors.type && touched.type && errors.type}

                <InputField
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  label="Grant Amount per charter"
                  type="text"
                  sx={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "8px",
                    border: "1px solid #DFE2E8",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                  }}
                />
                <InputField
                  value={values.deadlineDate}
                  onChange={handleChange}
                  name="deadlineDate"
                  label="Application Deadline"
                  type="date"
                  sx={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "8px",
                    border: "1px solid #DFE2E8",
                    boxShadow: "0px 1px 2px 0px #1018280D",
                  }}
                />
                <>
                  {errors.deadlineDate &&
                    touched.deadlineDate &&
                    errors?.deadlineDate}
                </>
                <SwitchButton
                  label={"Send Grant Invitation to Counties"}
                  sx={{ width: "36px", height: "20px", borderRadius: "12px" }}
                />

                <SwitchButton label={"Active"} defaultChecked={true} />

                <ButtonComponent
                  text="save"
                  type="submit"
                  variant="contained"
                  className="bg-clr-primary-blue-700 b-radius-8"
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
