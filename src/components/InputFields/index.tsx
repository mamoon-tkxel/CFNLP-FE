import { TextField, TextFieldProps, Stack, Typography } from "@mui/material";
type InputField = TextFieldProps & {
  label?: string;
  errorInputField?: string | boolean;
};
export const InputField: React.FC<InputField> = ({
  label,
  errorInputField,
  ...arg
}: InputField) => {
  return (
    <Stack position="relative">
      <Stack gap={1}>
        {label && <Typography>{label}</Typography>}
        <TextField {...arg} error={Boolean(errorInputField)} />
      </Stack>
      {errorInputField && (
        <Typography color="error" className="inputField">
          {errorInputField}
        </Typography>
      )}
    </Stack>
  );
};
