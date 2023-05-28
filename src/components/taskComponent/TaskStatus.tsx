import React, { useState ,useEffect} from 'react';
import { Task } from '@/interfaces';
import { tasksActions, getEditTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from "@/store/store";

type Props = {
  taskId?: string | undefined;
  taskImportant?: boolean;
};

const TaskStatus : React.FC<Props>= ({taskId}): JSX.Element => {
  const getForComplete = useAppSelector(getEditTask(taskId));
  const dispatch = useAppDispatch();

  const [isCompleted, setIsCompleted] = useState <Boolean | undefined>(undefined);
  const buttonClassName = isCompleted
    ? 'rounded-md text-green-800 bg-green-400 p-2'
    : 'rounded-md bg-rose-300 text-white p-2' ;
  const handleComplete = () => {
    if (taskId) {
      dispatch(tasksActions.toggleTaskCompleted(taskId));
      setIsCompleted(prevIsComplete => prevIsComplete !== undefined ? !prevIsComplete : false);
    }
  };
  useEffect(() => {
    setIsCompleted(getForComplete?.completed);
  }, [getForComplete]);

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