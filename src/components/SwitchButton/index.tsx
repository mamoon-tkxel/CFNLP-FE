import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

interface SWITCH_BUTTON {
  defaultChecked?: boolean;
  label?: string;
}

export const SwitchButton = ({ defaultChecked, label }: SWITCH_BUTTON) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked={defaultChecked} />}
        label={label || ""}
      />
    </FormGroup>
  );
};
