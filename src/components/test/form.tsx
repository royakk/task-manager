import React,{useState,useRef} from 'react'
import { Container,Box,Stack,Grid } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
interface MyFormValues {
    value: string;
  }
  type Task = {
    id: string;
    task: string;
  };
  
  
const Form1 = () => {
    const [input, setInput] = useState<string>("");
  const [list, setList] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    let task: Task = { id: uuidv4() , task: input };
    if (selectedTask) {
        const updaterow = list.findIndex((task) => task.id === selectedTask);
        let newList = [...list];
        newList[updaterow] = task;
        setList(newList);
        setSelectedTask(null)
    } else {
        setList([...list, task]);
    }
    
    setInput("");
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const removeTask = (id: string): void => {
    let newList: Task[] = list.filter((task) => task.id !== id);
    setList(newList);
  };
  const handleUpdate = (id: string): void => {
    const task = list.find((task) => task.id === id);
    setSelectedTask(id);
    if (task) {
      inputRef.current?.focus();
      setInput(task.task); 
    }
  };

  return (
    <div>
    <Container>
        <Grid container>
            <Grid item md={6}>
            <form onSubmit={handleSubmit}>
                <input
              className='rounded-md mx-3'
                type="text"
                placeholder="Type something..."
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setInput(e.target.value)
                }
              ref={inputRef}
        />
        <button

          className='bg-blue-300 p-3 rounded-md mx-3'
        >Save</button>
      </form>
            </Grid>
        <Grid item md={6}>
        <List >
        {list &&
          list.map((task: Task) => (
            <ListItem key={task.id}>
            <ListItemText>
            {task.task}
            <button 
            className='bg-red-300 p-3 rounded-md mx-3'
            onClick={() => removeTask(task.id)}>remove</button>
            <button 
            className='bg-red-300 p-3 rounded-md mx-3'
            onClick={() => handleUpdate(task.id)}
            >Update</button>
            </ListItemText>
           </ListItem>
           
          ))}   
        
             
        </List>
        </Grid>
        </Grid>
     
    </Container>
    </div>
        
     );
}
 
export default Form1;