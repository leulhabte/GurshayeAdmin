import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@material-ui/core';
import { PermDataSetting, Home, ExitToApp, AddBox, ViewList } from '@material-ui/icons';
import useStyles from './Styling';

const DrawerList = () => {
    const classes = useStyles();
    return (<div>
        <Box height={20}/>
        <List classes = {{root: classes.paper_label}}>
            <ListItem button>
                <ListItemIcon><Home classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>DashBoard</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button>
                <ListItemIcon><AddBox classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Insert Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button>
                <ListItemIcon><PermDataSetting classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Manage Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button>
                <ListItemIcon><ViewList classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>View Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button>
                <ListItemIcon><ExitToApp classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Logout</Typography></ListItemText>
            </ListItem>
        </List>
    </div>)
}

export default DrawerList;