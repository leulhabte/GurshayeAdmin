import React from 'react';
import useStyles from './Styling';
import {List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';

const UserHeading =({history})=>{
    const classes = useStyles();
    return(
        <div>
            <List classes = {{root: classes.user_heading}}>
                <ListItem>
                    <ListItemText
                        primary= {Cookies.get('username')}
                    >
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick = {()=>{history.push('/change')}}>
                            <Edit classes = {{root: classes.paper_label}}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )

}

export default withRouter(UserHeading);