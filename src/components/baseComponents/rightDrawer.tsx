import React from "react";
import Drawer from "@mui/material/Drawer";
import AccountDrawer from "./accountDrawer";
import {Box, Stack} from '@mui/material';
import LinearDeterminate from "./linearProgress";
import BtnDeleteAll from "./btnDeleteAll";

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
          width: 200,
        },
      }}
      anchor="right"
    >
     
        <AccountDrawer />
        <LinearDeterminate />
        <BtnDeleteAll/>
        <a
            target="_blank"
            href="https://github.com/royakk"
            className="mt-4 bg-violet-200 p-2 rounded-md text-violet-900 text-center transition hover:bg-rose-200 dark:text-slate-200"
            rel="noreferrer"
          >
            Projected by Roya Karimi
          </a>
      
    </Drawer>
  );
};

export default RightDrawer;
