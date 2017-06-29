// @flow
import type {TodoItem} from './model/TodoItem'
import type {Filter} from './model/Filter'

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectAll from 'material-ui/svg-icons/content/select-all';
import CheckboxBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';



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

  let inputTextField;

  const addItem = () => {
    const input = inputTextField.input;
    addTodo(input.value);
    input.value = ''
  };

  const onFilterChange = (event, value: Filter): void => {
    setFilter(value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>react-redux-todo</h2>
      </div>


      <TodoList items={items}/>


      <TextField ref={node => inputTextField = node}/>
      <FloatingActionButton onClick={addItem}>
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton mini={true} secondary={true} onClick={deleteAllTodos}>
        <DeleteSweep/>
      </FloatingActionButton>
      <FloatingActionButton mini={true} secondary={true} onClick={completeAllTodos}>
        <DoneAll/>
      </FloatingActionButton>
      <RadioButtonGroup
        name="visibilityFilter"
        onChange={onFilterChange}
        defaultSelected={filter}
      >
        <RadioButton
          value={Filters.all}
          label="Show all"
          checkedIcon={<SelectAll style={{color: '#F44336'}}/>}
          uncheckedIcon={<SelectAll />}
        />
        <RadioButton
          value={Filters.incomplete}
          label="Show incomplete"
          checkedIcon={<CheckboxBlank style={{color: '#F44336'}}/>}
          uncheckedIcon={<CheckboxBlank />}
        />
      </RadioButtonGroup>
    </div>
  );
};

export default App;