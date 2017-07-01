// @flow
import { combineReducers } from "redux";

import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  SET_TODO_DONE,
  COMPLETE_ALL_TODOS,
  SET_FILTER
} from "./ActionTypes";
import { Filters } from "./model/Filter";

const initialState = {
  items: Array.from(Array(20).keys()).map(i => ({
    id: i,
    text: "asdasdas",
    done: false
  })),
  filter: Filters.all
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
        ...oldState,
        items: oldState.items.concat(newItem)
      };
    case SET_TODO_DONE:
      return {
        ...oldState,
        items: oldState.items.map(item => {
          if (item.id === action.id) {
            return { ...item, done: action.done };
          } else {
            return item;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...oldState,
        items: oldState.items.filter(item => item.id !== action.id)
      };
    case DELETE_ALL_TODOS:
      return {
        ...oldState,
        items: []
      };
    case COMPLETE_ALL_TODOS:
      return {
        ...oldState,
        items: oldState.items.map(item => ({ ...item, done: true }))
      };
    case SET_FILTER:
      return {
        ...oldState,
        filter: action.filter
      };

    default:
      return oldState;
  }
}

export const rootReducer = combineReducers({
  todo
});
