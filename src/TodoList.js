// @flow
import type {TodoItem} from './model/TodoItem'

import React from 'react';

import TodoListItem from './TodoListItem'

type Props = {
  items: Array<TodoItem>,
  deleteTodo: (id: number) => void
}

const TodoList = ({items, deleteTodo}: Props) => {
  return (
    <ol>
      {
        items.map(item =>
          <TodoListItem
            key={item.id}
            id={item.id}
            text={item.text}
            deleteItem={() => deleteTodo(item.id)}
          />
        )
      }
    </ol>
  );
};

export default TodoList;