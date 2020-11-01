import React from 'react';
import useStyles from './Styling';
import Cookies from 'js-cookie';
import {Paper} from '@material-ui/core';


const Footer =()=>{
    const classes = useStyles();
    return(
        <div>
            <Paper classes={{root: classes.footer}}>Welcome {Cookies.get('username')} to Gurshaye Admin Page</Paper>
        </div>
    )

}

export default Footer;