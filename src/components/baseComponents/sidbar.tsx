import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ButtonBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomButton from "./button";
import AccountDrawer from "./accountDrawer";
import CustomAvatar from "./avatar";
import Search from "./search";
import { sidbarItems } from "@/data/sidbarItems";
import { tasksActions, getEditTask } from "../../store/taskSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import TemporaryDrawer from "./drawerTemporary";
import RightDrawer from "./rightDrawer";
import LinearDeterminate from "./linearProgress";
import BtnDeleteAll from "./btnDeleteAll";

const drawerWidth = 220;
interface LayoutProps {
  children: React.ReactNode;
}

export default function ResponsiveDrawer({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [date, setDate] = useState(""); // استفاده از state برای نمایش زمان جاری
  const dispatch = useAppDispatch();
  const testtoggle = useAppSelector((store) => store.tasks);
  console.log("toglle", testtoggle);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
    dispatch(tasksActions.toggleShowAll());
  }, []);
  const handleDrawerToggle = () => {
    setRightDrawerOpen(false);
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerRightToggle = () => {
    setMobileOpen(false);
    setRightDrawerOpen(!rightDrawerOpen);
  };
  
  const handleClickItem = (item: number) => {
    switch (item) {
      case 1:
        dispatch(tasksActions.toggleShowAll());
        break;
      case 2:
        dispatch(tasksActions.toggleShowImportant());
        break;
      case 3:
        dispatch(tasksActions.toggleShowComplete());
        break;
      case 4:
        dispatch(tasksActions.toggleShowUnComplete());
        break;
      default:
        dispatch(tasksActions.toggleShowAll());
        break;
    }
  };
  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <p className="flex  items-center justify-center text-lg font-semibold text-slate-900">
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
    </div>
  );


  return (
    <Box sx={{ display: "flex" ,justifyContent:'center'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { md: `${drawerWidth}px` },
          backgroundColor: "#e3e6fa",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Toolbar sx={{width:'400px'}}>
          <Search/>
          <Box
           sx={{display: { xs: "none" ,sm:'block'} }}
          >
            <p className="text-slate-500 mx-3">{date}</p></Box>
          
        </Toolbar>
        <Toolbar>
          <ButtonBase
            onClick={handleDrawerRightToggle}
            sx={{ my: 1, display: { sm: "block" } }}
          >
            <CustomAvatar src="./avatar.png" />
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
      >
        <TemporaryDrawer open={mobileOpen} onClose={handleDrawerToggle} />
        <RightDrawer open={rightDrawerOpen} onClose={handleDrawerRightToggle} />

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ebe6fc",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
              backgroundColor: "#ebe6fc",
            },
          }}
          open
          anchor="right"
        >
          <AccountDrawer />
          <LinearDeterminate />

          <BtnDeleteAll />
          <a
            target="_blank"
            href="https://github.com/royakk"
            className="mt-4 bg-violet-200 p-2 rounded-md text-violet-900 text-center transition hover:bg-rose-200 dark:text-slate-200"
            rel="noreferrer"
          >
            Projected by Roya Karimi
          </a>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          marginTop: "66px ",
          padding: 2,
          // display: "flex",
          // justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
