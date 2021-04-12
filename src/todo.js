// one row to do
import React, { useState } from "react";
import { List, ListItem, ListItemText, Button,Input } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import "./Todo.css";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    //update TODOS with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update todo</h1>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            // className={classes.button}
            startIcon={<SaveIcon />}
            onClick={updateTodo}
          >
            Update
          </Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
        </ListItem>
        <EditIcon
          onClick={(e) => setOpen(true)}
          color="primary"
          fontSize="small"
        />
        <RemoveCircleOutlineIcon
          color="secondary"
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        />
      </List>
    </>
  );
}

export default Todo;
