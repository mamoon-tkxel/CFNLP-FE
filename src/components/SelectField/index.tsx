import { MenuItem, Select, SelectProps, Stack, Typography } from "@mui/material";
import { ChangeEventHandler } from "react";

type SELECT_FIELD = SelectProps & {
  name: string;
  label?: string;
  className?: string;
  value?: string | number;
  errorSelect?: string | boolean;
  options: {
    value?: string;
    label: string;
  }[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export const SelectField = ({
  name,
  label,
  className,
  value,
  errorSelect,
  options,
  onChange,
  ...args
}: SELECT_FIELD) => {
  return (
    <Stack gap="8px" sx={{ position: 'relative' }}>
      {label && <Typography>{label}</Typography>}
      <Select
        className={className}
        sx={{
          minHeight: "44px",
          "& select": {
            border: "none",
            padding: "8px",
          },
        }}
        name={name}
        value={value}
        onChange={onChange}
        {...args}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {errorSelect && (
        <Typography
          color="error"
          className="error"
          sx={{ position: 'absolute', top: '100%', left: 0 }}
        >
          {errorSelect}
        </Typography>
      )}
    </Stack>
  );
};
