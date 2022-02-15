import React from 'react';
import Addss from './components/Addss';
import TodoList from './components/TodoList';
function App() {

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Addss/>
      <TodoList/> 
    </div>
  );
}

export default App;
