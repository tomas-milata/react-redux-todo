// @flow
import type {Filter} from './model/Filter';
import {connect} from 'react-redux';
import './App.css';
import {addTodo, deleteAllTodos, completeAllTodos, setFilter} from './Actions';
import App from "./App";


const mapStateToProps = state => {
  return {
    items: state.todo.items,
    filter: state.todo.filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text: string) => dispatch(addTodo(text)),
    deleteAllTodos: () => dispatch(deleteAllTodos()),
    completeAllTodos: () => dispatch(completeAllTodos()),
    setFilter: (filter: Filter) => dispatch(setFilter(filter))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);