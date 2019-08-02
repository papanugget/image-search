import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () =>
    <div>
        <AppBar title="PixaBay Image Search">
            <ToolBar>
                <Typography variant="h6">
                    Pixabay Image Search
                </Typography>
            </ToolBar>
        </AppBar>
        <br/>
    </div>

export default NavBar;