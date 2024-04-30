import { Formik, FormikHelpers, Form } from "formik";

import { InputField } from "@/components/InputFields";
import { SwitchButton } from "@/components/SwitchButton";
import { SelectField } from "@/components/SelectField";
import { TextArea } from "@/components/TextAreaField";
import { ButtonComponent } from "@/components/Button";
import { ADMIN_CREATE_GRANT_VALUES } from "@/constants/types/forms";
import { createGrantValidationSchema } from "@/helpers/validations/AdminForms";

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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={createGrantValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <InputField
              name="title"
              label="Grant Title"
              type="text"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && touched.title && errors.title}

            <TextArea
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />

            <SelectField label="Grant Type" />
            {errors.type && touched.type && errors.type}

            <InputField
              name="amount"
              value={values.amount}
              onChange={handleChange}
              label="Grant Amount per charter"
              type="text"
            />
            <InputField
              value={values.deadlineDate}
              onChange={handleChange}
              name="deadlineDate"
              label="Application Deadline"
              type="date"
            />
            <>
              {errors.deadlineDate &&
                touched.deadlineDate &&
                errors?.deadlineDate}
            </>
            <SwitchButton label={"Send Grant Invitation to Counties"} />

            <SwitchButton label={"Active"} defaultChecked={true} />

            <ButtonComponent
              text="save"
              type="submit"
              variant="contained"
              className="bg-clr-primary-blue-700 b-radius-8"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateGrant;
