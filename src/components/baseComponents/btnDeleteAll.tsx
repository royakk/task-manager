import React ,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalConfirm from "../modal/modalConfirm";
import { tasksActions } from '../../store/taskSlice';
import { useAppDispatch , useAppSelector } from "@/store/store";

export default function BtnDeleteAll() {
    const [showModal, setIsModalShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  
  const removeTaskHandler = () => {
    dispatch(tasksActions.deleteAllData())

  };
  const handleClose = () => {
    setIsModalShown(false);
  };
  
  return (
    <>
    <ModalConfirm
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={removeTaskHandler}
      />
    <button
     onClick={() => setIsModalShown(true)}
     className='w-full flex justify-between items-center border bottom-5 mt-auto p-3 text-left hover:text-rose-600 transition'>
        Delete All Tasks
        <DeleteIcon/>
    </button>
    </>
  );
}

