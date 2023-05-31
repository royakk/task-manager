import * as React from 'react';
import { useRouter } from 'next/router';
import { Task } from '@/interfaces';
import CardTaskItem from '@/components/taskComponent/taskItem';
import { getEditTask } from '../../store/taskSlice';
import { useAppDispatch, useAppSelector } from "@/store/store";
import NewTaskArea from '@/components/taskComponent/newTaskArea';

export default function TaskItemPage() {
  const router = useRouter();
  const taskId = router.query.taskId?.toString(); // Explicitly cast taskId to string

  const getTaskById: Task | undefined = useAppSelector(getEditTask(taskId));
  console.log("getTaskById", getTaskById);

  if (!getTaskById) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center'>
      <CardTaskItem task={getTaskById} />
      <NewTaskArea />
      </div>
    </>
  );
}
