import React from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoListContainer';

const App = ({items, addTodo, deleteAllTodos}) => {

  let input;

  const addItem = () => {
    addTodo(input.value)
    input.value = ''
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>react-redux-todo</h2>
      </div>

      <TodoList items={items}/>


      <input ref={node => input = node} />
      <button onClick={addItem}>Add</button>
      <button onClick={deleteAllTodos}>Delete All</button>
    </div>
  );
};

export default App;

App.propTypes = {
  items: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
};