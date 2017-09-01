// @flow
import type { TodoItem } from "./model/TodoItem";

import React from "react";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";

import TodoList from "./component/TodoList";
import TodoToolbar from "./component/TodoToolbar";

import "./App.css";

type Props = {
  items: Array<TodoItem>,
  addTodo: (text: string) => void
};

const App = ({ items, addTodo }: Props) => {
  let inputTextField;

  const addItem = () => {
    const input = inputTextField.input;
    if (input.value) {
      addTodo(input.value);
      input.value = "";
    }
  };

  return (
    <div className="App">
      <TodoToolbar />

      <TodoList items={items} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "32px 16px",
          flex: "none"
        }}
      >
        <TextField
          ref={node => (inputTextField = node)}
          onKeyPress={ev => {
            if (ev.key === "Enter") {
              addItem();
            }
          }}
          autoFocus={true}
          hintText="Enter you note"
          style={{
            flex: 1,
            margin: "0 16px"
          }}
        />
        <FloatingActionButton onClick={addItem}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

export default App;
