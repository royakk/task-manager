import React, { useState, useEffect } from 'react';
import { Task } from '@/interfaces';
import CardTaskItem from './taskItem';
import NewTaskArea from './newTaskArea';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { getCompletedTasks, getImportantTasks,getUncompleteTasks } from '@/store/taskSlice';
import { tasksActions } from '../../store/taskSlice';

const Main = () => {
  const tasks :Task[] = useAppSelector(store => store.tasks.tasks);
  const completeTasks: Task[] = useAppSelector(getCompletedTasks);
  const importantTasks: Task[] = useAppSelector(getImportantTasks);
  const unCpmpleteTasks: Task[] = useAppSelector(getUncompleteTasks);
  const showTasks=  useAppSelector(store => store.tasks)

  console.log("tassssk", tasks);

  const [Tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
        {showTasks.showAll && Tasks.map((item: Task) => (
          <li style={{ listStyleType: 'none' }} key={item.id}>
            <CardTaskItem task={item} />
          </li>
        ))}
        {showTasks.showImportant && importantTasks.map((item: Task) => (
          <li style={{ listStyleType: 'none' }} key={item.id}>
            <CardTaskItem task={item} />
          </li>
        ))}
        {showTasks.showComplete && completeTasks.map((item: Task) => (
          <li style={{ listStyleType: 'none' }} key={item.id}>
            <CardTaskItem task={item} />
          </li>
        ))}
        {showTasks.showUnComplete && unCpmpleteTasks.map((item: Task) => (
          <li style={{ listStyleType: 'none' }} key={item.id}>
            <CardTaskItem task={item} />
          </li>
        ))}

        <NewTaskArea />
      </div>
    </>
  );
}

export default Main;
