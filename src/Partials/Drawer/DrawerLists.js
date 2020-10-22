import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@material-ui/core';
import { PermDataSetting, Home, ExitToApp, AddBox, ViewList } from '@material-ui/icons';
import useStyles from './Styling';
import {Link, withRouter} from 'react-router-dom';

const DrawerList = ({history}) => {
    const classes = useStyles();
    const routePage = (to)=>{
        history.replace(`/${to}`)
    }
    return (<div>
        <Box height={20}/>
        <List classes = {{root: classes.paper_label}}>
            <ListItem button onClick = {()=>{routePage('')}}>
                <ListItemIcon><Home classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>DashBoard</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('insert')}}>
                <ListItemIcon><AddBox classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Insert Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('manage')}}>
                <ListItemIcon><PermDataSetting classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Manage Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('view')}}>
                <ListItemIcon><ViewList classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>View Prediction</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('logout')}}>
                <ListItemIcon><ExitToApp classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Logout</Typography></ListItemText>
            </ListItem>
        </List>
    </div>)
}

export default withRouter(DrawerList);