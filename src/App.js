import React from 'react';
import {  useSelector } from 'react-redux'
import Addss from './components/Addss';

function App() {
  const todos = [...useSelector(state => state.todos)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
      <Addss/>
      <ul>
        {todos.map(todo => (
          <li key={todo.name}>
            <h3>{todo.name}</h3>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
