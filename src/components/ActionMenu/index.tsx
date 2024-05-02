import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreVertIcon } from "@/assets/svgs";

interface OPTIONS {
  label: string;
  value: string | number;
}
interface ACTION_MENU {
  options: OPTIONS[];
  clickHandler: (value: string | number) => void;
}

export const ActionMenu = ({
  options = [{ label: "labe", value: "lab" }],
  clickHandler,
}: ACTION_MENU) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option: string | number) => {
    if (option && clickHandler) {
      clickHandler(option);
    }
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {MoreVertIcon}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          minHeight: "192px",
          width: "200px",
          borderRadius: "8px",
          boxShadow: "0px 4px 16px 0px #00000026",
        }}
      >
        {options.map(({ label, value }, i) => (
          <MenuItem
            key={i}
            onClick={() => handleClose(value)}
            sx={{ padding: "12px, 16px, 12px, 16px" }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
