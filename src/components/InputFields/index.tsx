import { TextField, TextFieldProps, Stack, Typography } from "@mui/material";
type InputField = TextFieldProps & {
  label?: string;
  errorInputField?: string;
};
export const InputField = ({ label,errorInputField, ...arg }: InputField) => {
  return (
    <Stack gap={1}>
      {label && <Typography>{label}</Typography>}
      <TextField {...arg} />
      <Typography
        color="error"
        fontSize={10}
        margin="auto"
        p={0}
        mt={0.5}
        display="contents"
      >
        {errorInputField}
      </Typography>
    </Stack>
  );
};
