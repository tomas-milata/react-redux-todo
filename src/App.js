// @flow
import type { TodoItem } from './model/TodoItem';

import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import logo from './logo.svg';
import TodoList from './TodoListContainer';
import TodoToolbar from './TodoToolbarContainer';

import './App.css';

type Props = {
  items: Array<TodoItem>,
  addTodo: (text: string) => void
};

const App = ({
  items,
  addTodo,
}: Props) => {
  let inputTextField;

  const addItem = () => {
    const input = inputTextField.input;
    addTodo(input.value);
    input.value = '';
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>react-redux-todo</h2>
      </div>

      <TodoToolbar />

      <Paper>
        <TodoList items={items} />
      </Paper>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          width: "100%"
        }}
      >
        <TextField
          ref={node => (inputTextField = node)}
          hintText="Enter you note"
          style={{
            flex: 1,
            marginLeft: "16px",
            width: "100%"
          }}
        />
        <FloatingActionButton
          onClick={addItem}
          style={{
            flex: "none",
            margin: "16px"
          }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

export default App;
