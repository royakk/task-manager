import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useAppSelector } from '@/store/store';
import { getUncompleteTasks } from '@/store/taskSlice';
import { Task } from '@/interfaces';

export default function LinearDeterminate() {
  const tasks: Task[] = useAppSelector(({ tasks }) => tasks.tasks);
  const uncompleteTasks: Task[] = useAppSelector(getUncompleteTasks);
  const calcComplete = tasks.length - uncompleteTasks.length;
  const percentage = Math.round((calcComplete / tasks.length) * 100);

  return (
    <div className="w-full flex flex-col p-3">
      <div className="w-full flex justify-between">
        <p>All tasks</p>
        <p>{calcComplete} / {tasks.length}</p>
      </div>

      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={percentage} />
      </Box>
    </div>
  );
}
