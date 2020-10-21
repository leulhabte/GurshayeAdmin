import React from 'react';
import useStyles from './Styling';
import {Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const UserHeading =()=>{
    const classes = useStyles();
    return(
        <div>
            <List classes = {{root: classes.user_heading}}>
                <ListItem>
                    <ListItemText
                        primary= "Leul Habte"
                        // secondary= {<Typography classes={{root: classes.paper_label}}>@adminstrator</Typography>}
                    >
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <Edit classes = {{root: classes.paper_label}}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )

}

export default UserHeading;