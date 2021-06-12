import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import './Todo.css';

const styles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#8080807a',
        color: 'white',
        fontWeight: '500',
        maxWidth: '80%',
        textAlign: 'center',
        fontSize: '40px',
        margin: '0 auto',
        borderRadius: '3px',
    }
}));

function Todo({ todo }) {
    const classes = styles();
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText disableTypography={true} className={classes.root} primary={todo} />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
