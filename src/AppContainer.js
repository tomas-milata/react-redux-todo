// @flow
import {connect} from 'react-redux'
import './App.css';
import {addTodo, deleteAllTodos, completeAllTodos} from './Actions';
import App from "./App";


const mapStateToProps = state => {
  return {
    items: state.todo.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    deleteAllTodos: () => dispatch(deleteAllTodos()),
    completeAllTodos: () => dispatch(completeAllTodos()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);