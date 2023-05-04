import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ButtonBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomButton from './button';
import AccountDrawer from './accountDrawer';
import CustomAvatar from './avatar';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
function handleClickOpenMpdal() {
    console.log('Button clicked');
  }
export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] =useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setRightDrawerOpen(false)
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerRightToggle = () => {
    setMobileOpen(false);
    setRightDrawerOpen(!rightDrawerOpen)
  };

  const drawer = (
    <div >
      <Toolbar sx={{display:'flex',justifyContent:'center'}}> <p className="flex  items-center justify-center text-lg font-semibold text-slate-900">to do list</p></Toolbar>
     <div className="flex items-center justify-center my-3">
     <CustomButton label='add new task' onClick={handleClickOpenMpdal}/>
     </div>
      <Divider />
      <List>
        {['all tasks', 'important tasks', ' complete tasks', 'unComplete tasks'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton sx={{
                '& .selected': {
                    backgroundColor: 'red',
                },
                
            }} >
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'inherit',
          display:'flex',
          justifyContent:'space-between',
          flexDirection:'row'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Toolbar>
         <ButtonBase sx={{my:1 ,display: {xs:'block', sm:'none'}}}>
            <CustomAvatar src='./avatar.png' />
        </ButtonBase>
        </Toolbar>    
          
          
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
       
      >
      
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
          anchor="right"
        >
          <AccountDrawer/>
        </Drawer>
      </Box>
     
    </Box>
  );
}