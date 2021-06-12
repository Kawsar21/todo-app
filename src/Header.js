import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6">
                    KAWSAR'S TODOS
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
