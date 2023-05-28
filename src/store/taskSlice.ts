import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/interfaces';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { type } from 'os';
import { stat } from 'fs';


const getTasks = (state: RootState): Task[] => state.tasks.tasks;
  export const defaultTasks: Task[] = [
    {
      title: 'Task 1',
      important: false,
      Description: 'This is the description for this task1',
      date: '2023-04-12',
      completed: true,
      id: 't1'
    },
    {
      title: 'Task 2',
      important: true,
      Description: 'This is the description for this task2',
      date: '2023-05-15',
      completed: true,
      id: 't2'
    },
    {
      title: 'Task 3',
      important: false,
      Description: 'This is the description for this task3',
      date: '2023-08-21',
      completed: false,
      id: 't3'
    },
  ];
  const initialState: {
    tasks: Task[],
    showImportant: boolean | undefined,
    showComplete: boolean | undefined,
    showAll: boolean | undefined,
  } = {
    tasks: (typeof window !== 'undefined' && localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')!) : defaultTasks,
    showImportant: undefined,
    showComplete: undefined,
    showAll: undefined
  };

  const tasksSlice=createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addNewTask(state, action: PayloadAction<Task>) {
            state.tasks = [action.payload, ...state.tasks];
          },
          removeTask(state, action) {
            const newTasksList = state.tasks.filter(task => task.id !== action.payload);
            state.tasks = newTasksList;
          },
          markAsImportant(state, action: PayloadAction<string>) {
            const newTaskFavorited = state.tasks.find(task => task.id === action.payload);
            newTaskFavorited!.important = !newTaskFavorited!.important;
          },
          editTask(state, action: PayloadAction<Task>) {
            const taskId = action.payload.id;
            const newTaskEdited: Task = state.tasks.find((task: Task) => task.id === taskId)!;
            const indexTask = state.tasks.indexOf(newTaskEdited);
            state.tasks[indexTask] = action.payload;
          },
          toggleTaskCompleted(state, action: PayloadAction<string>) {
            const taskId = action.payload;
            const currTask = state.tasks.find(task => task.id === taskId)!;
            currTask.completed = !currTask.completed;
          },
          deleteAllData(state) {
            state.tasks = [];
          },
          toggleShowImportant(state){
            state.showImportant = true;
            state.showComplete = false;
            state.showAll =false;
          },
          toggleShowComplete(state){
            state.showImportant = false;
            state.showComplete = true;
            state.showAll =false;
          },
          toggleShowAll(state){
            state.showImportant = false;
            state.showComplete = false;
            state.showAll =true;
          }
    }
  })

  // export const selectImportant = (state) =>{}
  export const tasksActions = tasksSlice.actions;
  export const getCompletedTasks = createSelector(
    [getTasks],
    (tasks: Task[]) => tasks.filter(task => task.completed),
  );
  export const getImportantTasks = createSelector(
    [getTasks],
    (tasks: Task[]) => tasks.filter(task => task.important),
  );
  export const getEditTask = (id: string | undefined) =>
  createSelector([getTasks], (tasks: Task[]) =>
    tasks.find(task => task.id === id)
  );
  export default tasksSlice.reducer;