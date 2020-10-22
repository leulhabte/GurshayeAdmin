import React from 'react';
import { Drawer, Hidden, Typography, createMuiTheme, Button } from '@material-ui/core';
import DrawerList from './DrawerLists';
import useStyles from './Styling';
import Heading from './Heading';
import UserHeading from './UserHeading';
import AppBar from '../AppBar/AppBar';

const Drawers = () => {
    const [open, setOpen] = React.useState(false)
    const _handleOpen = () => {
        setOpen(!open)
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar _handleOpen={_handleOpen} />
            <nav className={classes.drawer}>
                <Hidden smUp>
                    <Drawer
                        open={open}
                        onClose={_handleOpen}
                        variant='temporary'
                        classes={{
                            paper: classes.paper,
                        }}
                    >
                        <Heading />
                        <UserHeading />
                        <DrawerList />
                    </Drawer>
                </Hidden>
                <Hidden xsDown>
                    <Drawer
                        open
                        variant='permanent'
                        classes={{
                            paper: classes.paper,
                        }}
                    >
                        <Heading />
                        <UserHeading />
                        <DrawerList />
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )

}

export default Drawers;