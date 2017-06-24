// @flow
import React from 'react';

type Props = {
  text: string,
  done: boolean,
  deleteItem: () => void,
  setDone: (boolean) => void
}

const TodoListItem = ({text, done, deleteItem, setDone}: Props) => {
  const toggle = () => setDone(!done);
  return (
    <li>
      <input type="checkbox" checked={done} onClick={toggle}/>
      {text}
      <button onClick={deleteItem}>x</button>
    </li>
  );
};

export default TodoListItem;