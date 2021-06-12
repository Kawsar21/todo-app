import { Button, Snackbar, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import './Textfield.css';
import Todo from './Todo';

function Textfield() {
    const [open, setOpen] = useState(false);
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput('');
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="button">
            <form noValidate autoComplete="off">
                <TextField value={input} onChange={e => setInput(e.target.value)} id="standard-basic" label="I will do this *" />
                <br />
                <Button type="submit" onClick={addTodo} id="standard-basic" className="button-primary" variant="contained" color="primary">
                <AddIcon />Add
                </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Successfully Added!
                </Alert>
            </Snackbar>
            {
                todos.map((todo) => <Todo todo={todo} />)
            }
        </div>
    )
}

export default Textfield
