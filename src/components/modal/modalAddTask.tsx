import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddEditTask from '../taskComponent/AddEditTask';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e2e8f0',
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

export default function ModalAddTask({ isOpen, onClose ,onConfirm}: Props) {
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
        <AddEditTask onClose={onClose} onConfirm={onConfirm}/>
      </Box>
    </Modal>
  );
}