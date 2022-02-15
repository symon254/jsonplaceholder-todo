import React from 'react';
import {  useSelector, useDispatch } from 'react-redux'
import { deleteTodo} from '../reducers/todos';
import { useState } from 'react';
 

const TodoList = () => {
    const [todo, setTodo] = useState('');
  
    const dispatch = useDispatch();
    const todos = [...useSelector(state => state.todos)].sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    // handleDelete = (field) =>{
    //     const {deleteTodo} = this.props;
    //     deleteTodo({field})
    // }
      const handleDelete = event => {
        //event.preventDefault();
        dispatch(deleteTodo(todo))
        setTodo('');
      };
      return (
        <ul>
        {todos.map(todo => (
          <li key={todo.name}>
            <h3>{todo.name}
           <button>edit</button>
            <button onClick={handleDelete}>delete</button></h3>
          </li>
          
        ))}
      </ul>   
      )
    }
  
    export default TodoList
  