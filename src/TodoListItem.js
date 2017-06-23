import React from 'react';
import PropTypes from 'prop-types'

const TodoListItem = ({text, id, deleteItem}) => {
  return <li onClick={deleteItem}>{text}
    <button>x</button>
  </li>
};

TodoListItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func
};

export default TodoListItem;