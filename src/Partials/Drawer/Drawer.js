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
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
        </Typography>
            </div>
        </div>
    )

}

export default Drawers;