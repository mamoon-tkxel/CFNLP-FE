import { TextField, TextFieldProps, Stack, Typography } from "@mui/material";
type TextFieldComponentProps=TextFieldProps & {
  background?:string,
  title?:string,
}
export const TextFieldComponent = ({background,title,...arg}:TextFieldComponentProps) => {
  return (
    <Stack
    gap={1}
    >
   {title && <Typography>{title}</Typography>}
    <TextField  {...arg} sx={{backgroundColor:{background}}}/>
    </Stack>
  );
};
