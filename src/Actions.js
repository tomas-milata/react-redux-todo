// @flow
import {ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS, SET_TODO_DONE} from './ActionTypes';

let todoCounter = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text,
  id: ++todoCounter,
});

export const setTodoDone = (id: number) => (done: boolean) => ({
  type: SET_TODO_DONE,
  id,
  done
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS
});