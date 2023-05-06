import * as React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TaskAction from './taskAction';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Task } from '@/interfaces';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function CardTaskItem ({ task }: { task?: Task }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <p className='text-lg font-medium mb-3'>{task?.title}</p>
      <p className='text-slate-400'>{task?.description}</p>
      <div className="flex justify-normal mt-3 mb-1 ">
      <CalendarMonthIcon/>
      <p className='mx-1'>{task?.date}</p>
      </div>
      </CardContent>
      <Divider  variant="middle"/>
      <CardActions>
        <TaskAction/>
      </CardActions>
    </Card>
  );
}