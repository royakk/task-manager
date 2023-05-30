import * as React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useRouter } from 'next/router';

import { Task } from '@/interfaces';
import CardTaskItem from '@/components/taskComponent/taskItem';
import { getEditTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function TaskItemPage () {
  const router = useRouter();
  const taskId = router.query.taskId?.toString(); // Explicitly cast taskId to string

  const getTaskById: Task | undefined = useAppSelector(getEditTask(taskId));
  console.log("getTaskById",getTaskById);
  

  if (!getTaskById) {
    return <div>Loading...</div>;
  }

  return <CardTaskItem task={getTaskById} />;
}
