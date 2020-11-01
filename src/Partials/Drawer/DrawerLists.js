import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@material-ui/core';
import { PermDataSetting, Home, ExitToApp, AddBox, ViewList, LabelImportant } from '@material-ui/icons';
import useStyles from './Styling';
import {withRouter} from 'react-router-dom';

const DrawerList = ({history, handleLogout}) => {
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
                <ListItemText><Typography>Manage Predictions</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('view')}}>
                <ListItemIcon><ViewList classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>View Predictions</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {()=>{routePage('is_correct')}}>
                <ListItemIcon><LabelImportant classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Label Predictions</Typography></ListItemText>
            </ListItem>
            <Box height={10}/>
            <ListItem button onClick = {handleLogout}>
                <ListItemIcon><ExitToApp classes = {{root: classes.paper_label}}/></ListItemIcon>
                <ListItemText><Typography>Logout</Typography></ListItemText>
            </ListItem>
        </List>
    </div>)
}

export default withRouter(DrawerList);