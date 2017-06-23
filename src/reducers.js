import {combineReducers} from 'redux';

import {ADD_TODO, DELETE_TODO} from './ActionTypes';

const initialState = {
  items: []
};

function todo(oldState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newItem = {
        id: action.id,
        text: action.text
      };
      return {
        items: oldState.items.concat(newItem)
      };
    case DELETE_TODO:
      return {
        items: oldState.items.filter(item => item.id !== action.id)
      };

    default:
      return oldState;
  }
}

export const rootReducer = combineReducers({
  todo
});