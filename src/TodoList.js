import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = ({items, deleteTodo}) => {
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