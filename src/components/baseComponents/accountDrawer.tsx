import  React,{useState} from 'react';
import Divider from '@mui/material/Divider';
import CustomAvatar from './avatar';

const AccountDrawer = () => {
    return ( 
        <div >
       <div className="flex items-center justify-center my-3 ">
        <p className='mx-2' >Hi Roya</p>
        <CustomAvatar src='./avatar.png' />
       </div>
        <Divider  />
        
      </div> 
     );
}
 
export default AccountDrawer;