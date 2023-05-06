import React, { useState } from 'react';
import { Task } from '@/interfaces';
import BtnDelete from './btnDelete';

const taskAction = ({ task }: { task?: Task }): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(false);
  const buttonClassName = isCompleted
    ? 'w-full rounded-md bg-rose-300 text-white p-2'
    : 'w-full rounded-md text-green-800 bg-green-400 p-2';
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <>
      <div className="flex justify-between ...">
        <button className={buttonClassName} onClick={handleComplete}>
          {task?.completed}
        </button>
        <div>
            <BtnDelete/>
        </div>
      </div>
    </>
  );
};

export default taskAction;