import React, { useState } from "react";
import { Task } from "@/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalConfirm from "../modal/modalConfirm";
import { tasksActions } from '../../store/taskSlice';
import { useAppDispatch , useAppSelector } from "@/store/store";
type Props = {
  taskId?: string;
};

const BtnDelete: React.FC<Props> = ({ taskId }) => {
  const [showModal, setIsModalShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  
  const removeTaskHandler = () => {
    dispatch(tasksActions.removeTask(taskId))

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
        className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"
      >
        <DeleteIcon />
      </button>
    </>
  );
};

export default React.memo(BtnDelete);
