import { combineReducers } from 'redux';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}
export const deleteTodo = (index) => {
  return{
    type: DELETE_TODO,
    index,
  }
}
export const editTodo = (edit) => {
  return{
    type: EDIT_TODO,
    payload: edit
  }
}
// export function deleteTodo(todo){
//   return {
//     type: DELETE_TODO,
//     payload:todo
//   }
// }

// const initialState = [
//   {
 
//   }
// ];
const initialState = [{
  
 }
];
function todos(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          name: action.todo,
          
        }
      ];
     case 'EDIT_ITEM':
      return {...state, name: {...state.name, ...action.payload}}
        
      
    case DELETE_TODO:
    return state.slice(0, action.index).concat(state.slice(action.index + 1));
    //const newState = state.filter( val => val !== action.index );

    // case DELETE_TODO:
    //   return [
    //     ...state.filter(todo => todo !== action.payload),
    //   ]
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
