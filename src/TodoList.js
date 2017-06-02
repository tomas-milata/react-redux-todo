import React from 'react';

const TodoItem = ({text}) => {
  return <li>{text}</li>
};

const TodoList = (props) => {
  return (
    <ol>
      {
        props.items.map(item =>
          <TodoItem
            key={item.index}
            text={item.text}
          />
        )
      }
    </ol>
  );
};

export default TodoList;