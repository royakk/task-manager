import React, { useState } from 'react';
import { Task } from '@/interfaces';
import StarIcon from '@mui/icons-material/Star';
type Props = {
    taskId?: string;
    taskImportant?: boolean;
  };
  
  const BtnMarkAsImportant: React.FC<Props> = ({ taskId, taskImportant}) => {
  
    const markAsImportantHandler = () => {
    };
  
    return (
      <button
        title={taskImportant ? 'unmark as important' : 'mark as important'}
        onClick={markAsImportantHandler}
        className='transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto'>
        <StarIcon color={taskImportant ? 'secondary' : 'action'}/>
      </button>
    );
  };
  
  export default React.memo(BtnMarkAsImportant);