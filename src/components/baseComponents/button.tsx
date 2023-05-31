import React ,{useState} from 'react';
import ModalAddTask from "../modal/modalAddTask";

interface CustomButtonProps {
  label: string;
 
}

function CustomButton({ label}: CustomButtonProps) {
  const [showModal, setIsModalShown] = useState<boolean>(false);
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
    <button className="h-10 px-6 font-semibold rounded-md bg-violet-600 text-white " onClick={() => setIsModalShown(true)}>
      {label}
    </button>
    </>
  );
}

export default CustomButton;