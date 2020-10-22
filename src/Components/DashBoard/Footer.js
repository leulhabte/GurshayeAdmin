import React from 'react';
import useStyles from './Styling';
import {Container, Paper, Typography} from '@material-ui/core';


const Footer =()=>{
    const classes = useStyles();
    return(
        <div>
            <Paper classes={{root: classes.footer}}>Welcome Leul Habte to Gurshaye Admin Page</Paper>
            <Typography classes={{root: classes.footer_txt}}>Subscriptions 1.2M</Typography>
        </div>
    )

}

export default Footer;