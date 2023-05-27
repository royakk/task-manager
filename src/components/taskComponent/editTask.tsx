import React, { useState } from "react";
import { Task } from "@/interfaces";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModalConfirm from "../modal/modalConfirm";
import ModalAddTask from "../modal/modalAddTask";
type Props = {
  taskId?: string;
};

const BtnEdite: React.FC<Props> = ({ taskId }) => {
  const [showModal, setIsModalShown] = useState<boolean>(false);
  const editTaskHandler = () => {
    if (taskId){

    }
   
  };
  const handleClose = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <ModalAddTask
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={editTaskHandler}
        taskId = {taskId}
      />
      <button
        onClick={() => setIsModalShown(true)}
        className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"
      >
        <MoreVertIcon />
      </button>
    </>
  );
};

export default React.memo(BtnEdite);
