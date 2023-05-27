// import React,{useState,useRef,useReducer} from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import Todo from './todo';
// import Form1 from './form';
// function TodoList() {
//     const [todos, setTodos] = useState([
//       { id: uuidv4(), task: "task 1", completed: false },
//       { id: uuidv4(), task: "task 2", completed: true }
//     ]);
  
//     const create = newTodo => {
//       console.log(newTodo);
//       setTodos([...todos, newTodo]);
//     };
  
//     const remove = (id :string) => {
//       setTodos(todos.filter(todo => todo.id !== id));
//     };
  
//     const update = (id, updtedTask) => {
//       const updatedTodos = todos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, task: updtedTask };
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//     };
  
//     const toggleComplete = (id:string)=> {
//       const updatedTodos = todos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//     };
  
//     const todosList = todos.map(todo => (
//       <Todo
//         toggleComplete={toggleComplete}
//         update={update}
//         remove={remove}
//         key={todo.id}
//         todo={todo}
//       />
//     ));
  
//     return (
//       <div className="TodoList">
//         <h1>
//           Todo List <span>A simple React Todo List App</span>
//         </h1>
//         <ul>{todosList}</ul>
//         <Form1 createToDo={create} />
//       </div>
//     );
//   }
  
//   export default TodoList;