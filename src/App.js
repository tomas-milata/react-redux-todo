// @flow
import type {TodoItem} from './model/TodoItem'
import type {Filter} from './model/Filter'

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';


import logo from './logo.svg';
import './App.css';
import TodoList from './TodoListContainer';
import {Filters} from './model/Filter'


type Props = {
  items: Array<TodoItem>,
  filter: Filter,
  addTodo: (text: string) => void,
  deleteAllTodos: () => void,
  completeAllTodos: () => void,
  setFilter: (filter: Filter) => void
}

const App = ({items, filter, addTodo, deleteAllTodos, completeAllTodos, setFilter}: Props) => {

  let inputTextField, filterElement;

  const addItem = () => {
    const input = inputTextField.input;
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


      <TextField ref={node => inputTextField = node}/>
      <FloatingActionButton onClick={addItem} mini={true}>
        <ContentAdd />
      </FloatingActionButton>
      <button onClick={deleteAllTodos}>Delete All</button>
      <button onClick={completeAllTodos}>Complete All</button>
      <select
        onChange={() => setFilter(filterElement.value)}
        ref={node => filterElement = node}
        defaultValue={filter}
      >
        <option value={Filters.all}>* (all)</option>
        <option value={Filters.incomplete}>&#x2610; (incomplete)</option>
      </select>
    </div>
  );
};

export default App;