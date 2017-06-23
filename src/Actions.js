import {ADD_TODO, DELETE_TODO} from './ActionTypes';

let todoCounter = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: ++todoCounter,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});