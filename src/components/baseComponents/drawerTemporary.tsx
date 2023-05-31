import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { sidbarItems } from "@/data/sidbarItems";
import { useAppDispatch } from "@/store/store";
import { tasksActions } from "../../store/taskSlice";
import CustomButton from "./button";
import { Toolbar,Divider } from "@mui/material";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();

  const handleClickItem = (item: number) => {
    console.log("clickkk");
    
    switch (item) {
      case 1:
        dispatch(tasksActions.toggleShowAll());
        onClose()
        break;
      case 2:
        dispatch(tasksActions.toggleShowImportant());
        onClose()
        break;
      case 3:
        dispatch(tasksActions.toggleShowComplete());
        onClose()
        break;
      case 4:
        dispatch(tasksActions.toggleShowUnComplete());
        onClose()
        break;
      default:
        dispatch(tasksActions.toggleShowAll());
        onClose()
        break;
    }
  };

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
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <p className="flex items-center justify-center text-lg font-semibold text-slate-900">
          to do list
        </p>
      </Toolbar>
      <div className="flex items-center justify-center my-3">
        <CustomButton label="add new task" />
      </div>
      <Divider />
      <List>
        {sidbarItems.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                "& .selected": {
                  backgroundColor: "red",
                },
              }}
              onClick={() => handleClickItem(item.id)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TemporaryDrawer;
