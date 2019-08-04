import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';


const NavBar = () =>
    <div>
        <AppBar title="PixaBay Image Search">
            <Toolbar>
                <Typography variant="h6">
                    Pixabay Image Search
                </Typography>
            </Toolbar>
        </AppBar>
        <br/>
    </div>

export default NavBar;