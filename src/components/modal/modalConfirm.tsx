import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm:() =>void;
}

export default function ModalConfirm({ isOpen, onClose ,onConfirm}: Props) {
const handleConfirm =() =>{
    onConfirm();
    onClose();
}
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        This task will be deleted permanently 
        </Typography>
        <div className='flex justify-between my-3'>
        <button className='border-2 p-2 rounded-md' onClick={onClose}>Cancel</button>
        <button className= ' rounded-md text-white bg-violet-600 p-2' onClick={handleConfirm}>Yes im sure!</button>
        </div>
      </Box>
    </Modal>
  );
}