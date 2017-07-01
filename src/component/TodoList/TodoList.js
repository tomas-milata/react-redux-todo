// @flow
import type { TodoItem } from "../../model/TodoItem";
import type { Filter } from "../../model/Filter";

import React from "react";
import ReactDOM from "react-dom";
import { List } from "material-ui/List";

import TodoListItem from "../TodoListItem";
import { Filters } from "../../model/Filter";

type Props = {
  items: Array<TodoItem>,
  filter: Filter,
  deleteTodo: (id: number) => void,
  setTodoDone: (id: number) => (done: boolean) => void
};

class TodoList extends React.Component {
  props: Props;
  list: any;

  scrollToBottom = () => {
    const items = ReactDOM.findDOMNode(this.list).children;
    if (items.length > 0) {
      items[items.length - 1].scrollIntoView();
    }
  };

  componentDidUpdate(prevProps: Props, prevState) {
    if (this.props.items.length > prevProps.items.length) {
      this.scrollToBottom();
    }
  }

  render() {
    const { items, deleteTodo, setTodoDone, filter } = this.props;

    const filterItem = (item: TodoItem): boolean => {
      switch (filter) {
        case Filters.all:
          return true;
        case Filters.incomplete:
          return !item.done;
        default:
          return true;
      }
    };

    return (
      <List
        ref={node => {
          this.list = node;
        }}
        style={{
          overflowY: "scroll"
        }}
      >
        {items
          .filter(item => filterItem(item))
          .map(item =>
            <TodoListItem
              key={item.id}
              text={item.text}
              done={item.done}
              setDone={done => setTodoDone(item.id)(done)}
              deleteItem={() => deleteTodo(item.id)}
            />
          )}
      </List>
    );
  }
}

export default TodoList;
