import React from 'react';
import {AppBar, Toolbar, Box, IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import './AppBar.css';
import useStyles from './Styling';

const AppBars =({_handleOpen})=>{
    const classes = useStyles();
    return(
        <AppBar classes={{root: classes.appBar}}>
            <Toolbar>
                <Box display = 'flex' flexDirection = 'row'>
                    <Box><IconButton onClick = {_handleOpen}><Menu classes = {{root: classes.menu}}/></IconButton></Box>
                    <Box flexGrow = '1'></Box>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default AppBars;