import React from "react";
import Drawer from "@mui/material/Drawer";
import AccountDrawer from "./accountDrawer";

interface RightDrawerProps {
  open: boolean;
  onClose: () => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
      anchor="right"
    >
      <AccountDrawer />
    </Drawer>
  );
};

export default RightDrawer;
