import { TextField, TextFieldProps, Stack, Typography } from "@mui/material";
type InputField = TextFieldProps & {
  label?: string;
};
export const InputField = ({ label, ...arg }: InputField) => {
  return (
    <Stack gap={1}>
      {label && <Typography>{label}</Typography>}
      <TextField {...arg} />
    </Stack>
  );
};
