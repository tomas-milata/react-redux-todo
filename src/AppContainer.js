import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {addTodo} from './Actions';
import App from "./App";


const mapStateToProps = state => {
  return {
    items: state.todo.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);