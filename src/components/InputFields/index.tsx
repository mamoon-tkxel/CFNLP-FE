import { TextField, TextFieldProps, Stack, Typography } from "@mui/material";
type InputField = TextFieldProps & {
  label?: string;
  errorInputField?: string|boolean;
};
export const InputField = ({ label,errorInputField, ...arg }: InputField) => {
  return (
    <Stack gap={1}>
      {label && <Typography>{label}</Typography>}
      <TextField {...arg} />
      <Typography
        color="error"
        className="error"
      >
        {errorInputField}
      </Typography>
    </Stack>
  );
};
