import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { filterIcon } from "@/assets/svgs";
import { ButtonComponent } from "../Button";
import { SelectField } from "../SelectField";
import { InputField } from "../InputFields";
import { getCurrentDate } from "@/utils/helpers";

const CustomFilter = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      "& .MuiMenu-list": {
        width: "221px",
        top: "599px",
        left: "1560px",
        padding: "12px 0px 0px 0px",
        gap: "10px",
        borderRadius: "8px 0px 0px 0px",
        border: "1px 0px 0px 0px",
        opacity: "0px",
      },
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const TYPE_OPTIONS = [
  {
    label: "TYPE",
    value: "type",
  },
];
export default function FilterMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonComponent
        startIcon={filterIcon}
        text="Filter"
        variant="outlined"
        className="h-44 clr-gray-500 border-clr-gray-300 height"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        Filter
      </ButtonComponent>
      <CustomFilter
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ gap: "10px" }}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <SelectField
            label="Type"
            name="type"
            className="select filterType"
            options={TYPE_OPTIONS}
          />{" "}
        </MenuItem>
        <MenuItem>
          <InputField
            //   value={values.deadlineDate}
            //   onChange={handleChange}
            name="deadlineDate"
            label="Date"
            type="date"
            className="textField filterDate"
            inputProps={{
              min: getCurrentDate(),
            }}
          />
        </MenuItem>
      </CustomFilter>
    </div>
  );
}
