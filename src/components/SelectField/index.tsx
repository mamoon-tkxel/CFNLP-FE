import {
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography,
} from "@mui/material";

type SELECT_FIELD = SelectProps & {
  label?: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
};

export const SelectField = ({ label, className, options,...args }: SELECT_FIELD) => {
  return (
    <Stack gap="8px">
      {label && <Typography>{label}</Typography>}
      <Select className={className} sx={{ minHeight: "44px" }} {...args}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
