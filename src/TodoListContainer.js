import React from 'react';
import {connect} from 'react-redux'

import {deleteTodo} from './Actions';
import TodoList from "./TodoList";

const mapStateToProps = state => {
  return {
    items: state.todo.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);