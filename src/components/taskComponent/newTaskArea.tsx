import React ,{useState} from 'react'
import ModalAddTask from "../modal/modalAddTask";

const NewTaskArea = () => {
    const [showModal, setIsModalShown] = useState<boolean>(false);
    const taskDeleteHandler = () => {};
    const removeTaskHandler = () => {
      alert("edite");
    };
    const handleClose = () => {
      setIsModalShown(false);
    };
  return (
    <>
       <ModalAddTask
        isOpen={showModal}
        onClose={handleClose}
        onConfirm={removeTaskHandler}
       />
        <button 
        onClick={() => setIsModalShown(true)}
         className='w-60 !important h-64 !important border-2 border-slate-300 text-slate-400 rounded-lg border-dashed transition hover:bg-slate-300 hover:text-slate-500'>
          Add new task
        </button>
     
    </>
  );
};

export default NewTaskArea;
