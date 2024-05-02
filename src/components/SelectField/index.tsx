import {
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEventHandler } from "react";

type SELECT_FIELD = SelectProps & {
  name: string;
  label?: string;
  className?: string;
  value?: string | number;
  options: {
    value?: string;
    label: string;
  }[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;

};

export const SelectField = ({name,label, className,value, options,onChange,...args }: SELECT_FIELD) => {
  return (
    <Stack gap="8px">
      {label && <Typography>{label}</Typography>}
      <Select className={className} sx={{ minHeight: "44px" }} name={name} value={value} onChange={onChange}{...args}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
