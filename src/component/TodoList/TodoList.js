// @flow
import type { TodoItem } from "../../model/TodoItem";
import type { Filter } from "../../model/Filter";

import React from "react";
import { List } from "material-ui/List";

import TodoListItem from "../TodoListItem";
import { Filters } from "../../model/Filter";

type Props = {
  items: Array<TodoItem>,
  filter: Filter,
  deleteTodo: (id: number) => void,
  setTodoDone: (id: number) => (done: boolean) => void
};

const TodoList = ({ items, deleteTodo, setTodoDone, filter }: Props) => {
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
    <List style={{
              overflowY: "scroll"
            }}>
      {items.filter(item => filterItem(item)).map(item =>
        <div>
          <TodoListItem
            key={item.id}
            text={item.text}
            done={item.done}
            setDone={done => setTodoDone(item.id)(done)}
            deleteItem={() => deleteTodo(item.id)}
          />
        </div>
      )}
    </List>
  );
};

export default TodoList;
