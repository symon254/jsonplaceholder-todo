import { combineReducers } from 'redux';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

// export function deleteTodo({field}){
//   return {
//     type: DELETE_TODO,
//     field
//   }
// }
export const deleteTodo = key =>({
  type: DELETE_TODO,
  payload: key
})
// const defaultTodos = [
//   {
//     name: '',
    
//   }
// ];
const initialState = {
  todos:[]
};

function todos(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          name: action.todo,
          
        }
      ];
    case DELETE_TODO:
      return{
       ...state,todos:state.todos.filter((i) => i!==action.payload)

      };

    //   return{
    //   ...state,
    //   ...state.filter(field => field !== action.field)
    // }
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
