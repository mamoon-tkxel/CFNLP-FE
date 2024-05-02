import { Formik, Form } from "formik";

import { ButtonComponent } from "@/components/Button";
import { InputField } from "@/components/InputFields";
import { Stack, Typography } from "@mui/material";
import { ASSIGN_GRANT_AMOUNT } from "@/constants/types/forms";
import { useState } from "react";
import { SwitchButton } from "@/components/SwitchButton";

interface GRANT_AMOUNT_TYPE {
  handleClose: () => void;
  handleSuccess: () => void;
}

const AssignGrantAmount = ({
  handleClose,
  handleSuccess,
}: GRANT_AMOUNT_TYPE) => {
  const [errorMessage] = useState("");
  const [loading] = useState(false);

  const initialValues: ASSIGN_GRANT_AMOUNT = {
    amount: 6000,
    sendContact: false,
  };

  const handleSubmitLogin = () => {
    handleSuccess();
  };

  return (
    <div>
      <h1>Assign Grant Amount</h1>
      <p>Please enter a value for this application</p>

      <Formik initialValues={initialValues} onSubmit={handleSubmitLogin}>
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Stack>
              <Stack gap="24px">
                <InputField
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  label="Grant Amount"
                  placeholder="6000"
                  type="number"
                  errorInputField={
                    errors.amount && touched.amount && errors.amount
                  }
                  className="textFieldError"
                />

                <SwitchButton
                  name="sendContact"
                  onChange={handleChange}
                  defaultChecked={!!values.sendContact}
                  label={"Send Grant Invitation to Counties"}
                  sx={{ width: "36px", height: "20px", borderRadius: "12px" }}
                />

                {/* {errors.email && touched.email && errors.email} */}

                <Stack gap="24px">
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {errorMessage && (
                      <Typography color="error" className="error">
                        {errorMessage}
                      </Typography>
                    )}
                  </Stack>
                  <ButtonComponent
                    text="Cancel"
                    onClick={handleClose}
                    variant="contained"
                  />
                  <ButtonComponent
                    text="Assign Grant"
                    type="submit"
                    variant="contained"
                    className="bg-clr-primary-blue-700 b-radius-8"
                    disabled={loading}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AssignGrantAmount;
