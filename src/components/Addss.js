import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo} from '../reducers/todos';
const Addss = () => {
  const [todoName, setTodo] = useState('');
  
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo(todoName))
    setTodo('');
  };
    return (
         <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add Todo
          </p>
          <input
            type="text"
            onChange={e => setTodo(e.target.value)}
            value={todoName}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }

  export default Addss
