import React from 'react';

const TodoItem = ({text, deleteItem}) => {
  return <li>{text} <button onClick={deleteItem}>x</button></li>
};

const TodoList = ({items, deleteItem}) => {
  return (
    <ol>
      {
        items.map(item =>
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            deleteItem={() => deleteItem(item.id)}
          />
        )
      }
    </ol>
  );
};

export default TodoList;