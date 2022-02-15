import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { deleteTodo} from '../reducers/todos';
import { useState } from 'react';
//import Todo from './Todo';

const TodoList = () => {
  const [setTodo] = useState('');
  const todos = [...useSelector(state => state.todos)]
    const [todo] = useState('');
  
    const dispatch = useDispatch();
    const handleSubmit = event => {
      event.preventDefault();
      setTodo('');
    };  

     const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteTodo(todo))
      };
      return (
        
           <div>
             <table onSubmit={handleSubmit}>
               <caption>
                 todo
               </caption>
               <thead>
                 <tr>
                   <th>todos</th>
                   <th>edit</th>
                   <th>delete</th>
                 </tr>
               </thead>
               <tbody>
                
                   {todos.map(todo => (
                      <tr key={todo.name}>
          <td>{todo.name}</td>
     
                   <td><button>edit</button></td>
                   <td> <button onClick={handleDelete}>delete</button></td>
                 </tr>
          ))}         
               </tbody>
               
             </table>
             
              
           
             
            
           </div> 
        
        
      )
    }
  
    export default TodoList
  