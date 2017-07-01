// @flow
import React from "react";
import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import ContentRemove from "material-ui/svg-icons/content/remove";
import IconButton from "material-ui/IconButton";

type Props = {
  text: string,
  done: boolean,
  deleteItem: () => void,
  setDone: boolean => void
};

const TodoListItem = ({ text, done, deleteItem, setDone }: Props) => {
  const toggle = () => setDone(!done);
  return (
    <Paper style={{
      margin: '8px'
    }}>
      <ListItem
        leftCheckbox={<Checkbox checked={done} onClick={toggle} />}
        primaryText={text}
        rightIconButton={
          <IconButton onTouchTap={deleteItem}>
            <ContentRemove />
          </IconButton>
        }
      />
    </Paper>
  );
};

export default TodoListItem;
