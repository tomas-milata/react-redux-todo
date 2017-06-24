// @flow
import {combineReducers} from 'redux';

import {ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS, SET_TODO_DONE} from './ActionTypes';

const initialState = {
  items: []
};

function todo(oldState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newItem = {
        id: action.id,
        text: action.text,
        done: false
      };
      return {
        items: oldState.items.concat(newItem)
      };
    case SET_TODO_DONE:
      return {
        items: oldState.items.map(item => {
          if (item.id === action.id) {
            return {...item, done: action.done}
          } else {
            return item
          }
        })
      };
    case DELETE_TODO:
      return {
        items: oldState.items.filter(item => item.id !== action.id)
      };
    case DELETE_ALL_TODOS:
      return {
        items: []
      };

    default:
      return oldState;
  }
}

export const rootReducer = combineReducers({
  todo
});