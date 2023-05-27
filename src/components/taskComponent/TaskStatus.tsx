import React, { useState } from 'react';
import { Task } from '@/interfaces';
import BtnDelete from './btnDelete';
import BtnEdite from './editTask';

const TaskStatus = ({ task }: { task?: Task }): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(false);
  const buttonClassName = isCompleted
    ? 'rounded-md text-green-800 bg-green-400 p-2'
    : 'rounded-md bg-rose-300 text-white p-2' ;
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <>
      <div className="flex justify-between ...">
        <button className={buttonClassName} onClick={handleComplete}>
          {isCompleted ? 'completed' :'unComoleted'}
        </button>
        <div className='flex justify-between'>
           
        </div>
      </div>
    </>
  );
};

export default React.memo(TaskStatus) ;