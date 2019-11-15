/* eslint-disable no-param-reassign */
import initialState from '../app/store/initialState';
import * as types from './actionTypes';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
        created: true,
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case types.CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducers;
