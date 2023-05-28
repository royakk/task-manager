import * as React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TaskAction from './TaskStatus';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Task } from '@/interfaces';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskStatus from './TaskStatus';
import BtnMarkImportant from './btnMarkImportant';
import BtnDelete from './btnDelete';
import BtnEdite from './editTask'
export default function CardTaskItem ({ task }: { task: Task }) {
  return (
    <Card sx={{ width: 250,minHeight:275,borderRadius:5 }}>
      <CardContent>
      <p className='text-lg font-medium mb-3'>{task.title}</p>
      <p className='text-slate-400 h-20'>{task?.Description}</p>
      <div className="flex justify-normal mt-3 mb-auto ">
      <CalendarMonthIcon/>
      <p className='mx-1'>{task.date}</p>
      </div>
      </CardContent>
      <Divider  variant="middle"/>
      <CardActions sx={{display:'flex',justifyContent:'space-between',mt:2}}>
        <TaskStatus taskId={task.id}/>
        <div className='flex justify-between'>
          <BtnMarkImportant taskImportant={task.important} taskId={task.id}/>
          <BtnDelete taskId={task.id}/>
          <BtnEdite taskId={task.id}/>
        </div>
      </CardActions>
    </Card>
  );
}