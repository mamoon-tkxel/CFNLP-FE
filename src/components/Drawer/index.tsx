import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

interface SIDE_DRAWER {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SideDrawer = ({ children, open, onClose }: SIDE_DRAWER) => {
  return (
    <Drawer open={open} onClose={onClose} anchor={"right"}>
      <Box sx={{ width: 650 }}>{children}</Box>
    </Drawer>
  );
};

export default SideDrawer;
