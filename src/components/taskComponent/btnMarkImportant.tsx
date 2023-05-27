import React, { useState, useEffect } from 'react';
import { Task } from '@/interfaces';
import StarIcon from '@mui/icons-material/Star';
import { tasksActions, getEditTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from "@/store/store";

type Props = {
  taskId?: string | undefined;
  taskImportant?: boolean;
};

const BtnMarkAsImportant: React.FC<Props> = ({ taskId, taskImportant }) => {
  const getForImportant = useAppSelector(getEditTask(taskId));

  const dispatch = useAppDispatch();
  const [isImportant, setIsImportant] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsImportant(getForImportant?.important);
  }, [getForImportant]);

  const markAsImportantHandler = () => {
    if (taskId) {
      dispatch(tasksActions.markAsImportant(taskId));
      setIsImportant(prevIsImportant => prevIsImportant !== undefined ? !prevIsImportant : false);
    }
  };

  return (
    <button
      title={isImportant ? 'unmark as important' : 'mark as important'}
      onClick={markAsImportantHandler}
      className='transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto'
    >
      <StarIcon color={isImportant ? 'secondary' : 'action'} />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
