import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material";

type SWITCH_BUTTON = SwitchProps & {
  defaultChecked?: boolean;
  label?: string;
};
const CustomSwitch = styled(Switch)(() => ({
  width: 36, // Fixed width from properties
  height: 20, // Fixed height from properties
  padding: 2, // Padding from properties
  "& .MuiSwitch-switchBase": {
    padding: 2, // Padding from properties
    "&.Mui-checked": {
      transform: "translateX(16px)", // Move the thumb to the end for "active" state
      color: "#fff", // Assuming you want a white thumb
    },
  },
  "& .MuiSwitch-thumb": {
    width: 16, // Radius from properties times two for the full width
    height: 16, // Radius from properties times two for the full height
    // boxShadow: '0px 1px 2px 0px #1018280F'

    boxShadow: "0px 1px 3px 0px #1018281A",
  },
  "& .MuiSwitch-track": {
    borderRadius: 12, // Radius from properties
    backgroundColor: "#F2F4F7", // Colors from properties
    opacity: 1, // No transparency
  },
}));
export const SwitchButton = ({
  name,
  onChange,
  defaultChecked,
  label,
}: SWITCH_BUTTON) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <CustomSwitch
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
