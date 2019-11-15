import axios from 'axios';
import * as types from './actionTypes';
import * as env from '../app/config/environment';

export const addTodo = title => dispatch => {
  axios
    .post(env.ADD_URL, {
      title,
      completed: false,
    })
    .then(res =>
      dispatch({
        type: types.ADD_TODO,
        payload: res.data,
      }),
    );
};

export const deleteTodo = id => dispatch => {
  axios.delete(`${env.DELETE_URL}${id}`).then(() =>
    dispatch({
      type: types.DELETE_TODO,
      payload: id,
    }),
  );
};

export const getTodos = () => dispatch => {
  axios.get(env.GET_URL).then(res =>
    dispatch({
      type: types.GET_TODOS,
      payload: res.data,
    }),
  );
};

export const checkTodo = payload => ({
  type: types.CHECK_TODO,
  payload,
});
