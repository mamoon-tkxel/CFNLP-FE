import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { SyntheticEvent } from "react";

interface SWITCH_BUTTON {
  name: string;
  defaultChecked?: boolean | undefined;
  label?: string;
  onChange?:
    | ((event: SyntheticEvent<Element, Event>, checked: boolean) => void)
    | undefined;
}

export const SwitchButton = ({
  defaultChecked,
  label,
  onChange,
  name,
}: SWITCH_BUTTON) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            name={name}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
        }
        label={label || ""}
      />
    </FormGroup>
  );
};
