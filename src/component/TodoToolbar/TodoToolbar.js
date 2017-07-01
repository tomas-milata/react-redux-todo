// @flow
import type { Filter } from "../../model/Filter";

import React from "react";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import SelectAll from "material-ui/svg-icons/content/select-all";
import CheckboxBlank from "material-ui/svg-icons/toggle/check-box-outline-blank";
import DeleteSweep from "material-ui/svg-icons/content/delete-sweep";
import DoneAll from "material-ui/svg-icons/action/done-all";
import IconButton from 'material-ui/IconButton';

import { Filters } from "../../model/Filter";

type Props = {
  filter: Filter,
  setFilter: (filter: Filter) => void,
  deleteAllTodos: () => void,
  completeAllTodos: () => void
};

export const TodoToolbar = (props: Props) => {
  const { filter, setFilter, deleteAllTodos, completeAllTodos } = props;

  const onFilterChange = (event, value: Filter): void => {
    setFilter(value);
  };

  return (
    <Toolbar style={{
      flex: 'none'
    }}>
      <ToolbarGroup>
        <RadioButtonGroup
          name="visibilityFilter"
          onChange={onFilterChange}
          defaultSelected={filter}
          style={{ display: "flex" }}
        >
          <RadioButton
            value={Filters.all}
            label="All"
            checkedIcon={<SelectAll style={{ color: "#F44336" }} />}
            uncheckedIcon={<SelectAll />}
          />
          <RadioButton
            value={Filters.incomplete}
            label="Incomplete"
            checkedIcon={<CheckboxBlank style={{ color: "#F44336" }} />}
            uncheckedIcon={<CheckboxBlank />}
          />
        </RadioButtonGroup>
      </ToolbarGroup>
      <ToolbarGroup>
        <IconButton
          onClick={deleteAllTodos}
        >
          <DeleteSweep />
        </IconButton>
        <IconButton
          onClick={completeAllTodos}
        >
          <DoneAll />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  );
};
