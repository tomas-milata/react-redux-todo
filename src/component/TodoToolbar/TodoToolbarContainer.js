// @flow
import type { Filter } from "../../model/Filter";

import { connect } from "react-redux";
import { deleteAllTodos, completeAllTodos, setFilter } from "../../Actions";
import { TodoToolbar } from "./TodoToolbar";

const mapStateToProps = state => {
  return {
    items: state.todo.items,
    filter: state.todo.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAllTodos: () => dispatch(deleteAllTodos()),
    completeAllTodos: () => dispatch(completeAllTodos()),
    setFilter: (filter: Filter) => dispatch(setFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoToolbar);
