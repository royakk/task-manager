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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import CustomAvatar from './avatar';

const AccountDrawer = () => {
    return ( 
        <div >
       <div className="flex items-center justify-center sm:my-3 xl:my-8 ">
        <p className='mx-2' >Hi Roya</p>
        <CustomAvatar src='./avatar.png' />
       </div>
        <Divider  />
        
      </div> 
     );
}
 
export default AccountDrawer;