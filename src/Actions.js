// @flow
import {ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS} from './ActionTypes';

let todoCounter = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text,
  id: ++todoCounter,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS
});