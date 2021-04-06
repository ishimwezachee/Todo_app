// one row to do 
import React from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';
import './Todo.css';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.text} secondary="Dummy deadline"/>
            </ListItem>
        </List>
        // <div>
        //      <li>{props.text}</li>
        // </div>
    )
}

export default Todo;
