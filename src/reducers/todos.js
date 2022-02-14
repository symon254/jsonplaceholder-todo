import { combineReducers } from 'redux';
const ADD_TODO = 'ADD_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

const defaultTodos = [
  {
    name: '',
    
  }
];

function todos(state=defaultTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          name: action.todo,
          
        }
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
