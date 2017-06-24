// @flow
import {connect} from 'react-redux'

import {deleteTodo, setTodoDone} from './Actions';
import TodoList from "./TodoList";

const mapStateToProps = state => {
  return {
    items: state.todo.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    setTodoDone: (id: number) => (done: boolean) => dispatch(setTodoDone(id)(done))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);