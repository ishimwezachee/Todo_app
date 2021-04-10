// one row to do 
import React from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './Todo.css';
import db from './firebase'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
            </ListItem>
            <RemoveCircleOutlineIcon color="secondary" onClick={event=>{
                db.collection('todos').doc(props.todo.id).delete()
            }} />
        </List>
        // <div>
        //      <li>{props.text}</li>
        // </div>
    )
}

export default Todo;
