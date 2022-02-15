import React from 'react';
import {  useSelector } from 'react-redux'
 

const TodoList = () => {
    const todos = [...useSelector(state => state.todos)]
    //sort((a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;});
      
      return (
        <ul>
          
        {todos.map(todo => (
          <li key={todo.name}>
            <h3>{todo.name}
           </h3>
           
          </li>
          
        ))}
      </ul>   
      )
    }
  
    export default TodoList
  