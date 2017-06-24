// @flow
import type {TodoItem} from './model/TodoItem'

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoListContainer';

type Props = {
  items: Array<TodoItem>,
  addTodo: (text: string) => void,
  deleteAllTodos: () => void,
  completeAllTodos: () => void
}

const App = ({items, addTodo, deleteAllTodos, completeAllTodos}: Props) => {

  let input;

  const addItem = () => {
    addTodo(input.value);
    input.value = ''
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>react-redux-todo</h2>
      </div>

      <TodoList items={items}/>


      <input ref={node => input = node}/>
      <button onClick={addItem}>Add</button>
      <button onClick={deleteAllTodos}>Delete All</button>
      <button onClick={completeAllTodos}>Complete All</button>
    </div>
  );
};

export default App;