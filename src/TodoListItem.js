// @flow
import React from 'react';

type Props = {
  text: string,
  deleteItem: () => void
}

const TodoListItem = ({text, deleteItem}: Props) => (
  <li onClick={deleteItem}>
    {text}
    <button>x</button>
  </li>
);

export default TodoListItem;