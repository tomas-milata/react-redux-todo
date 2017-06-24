// @flow
import type {TodoItem} from './model/TodoItem'

import React from 'react';

import TodoListItem from './TodoListItem'

type Props = {
  items: Array<TodoItem>,
  deleteTodo: (id: number) => void,
  setTodoDone: (id: number) => (done: boolean) => void
}

const TodoList = ({items, deleteTodo, setTodoDone}: Props) => {
  return (
    <ol>
      {
        items.map(item =>
          <TodoListItem
            key={item.id}
            text={item.text}
            done={item.done}
            setDone={(done) => setTodoDone(item.id)(done)}
            deleteItem={() => deleteTodo(item.id)}
          />
        )
      }
    </ol>
  );
};

export default TodoList;