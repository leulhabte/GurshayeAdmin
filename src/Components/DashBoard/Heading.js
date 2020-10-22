import React from 'react';
import useStyles from './Styling';
import {Typography, Breadcrumbs} from '@material-ui/core';


const Heading =()=>{
    const classes = useStyles();
    return(
        <div>
            <Breadcrumbs>
                <Typography>Home</Typography>
                <Typography>Dashboard</Typography>
            </Breadcrumbs>
            <Typography classes = {{root: classes.heading}}>Dashboard</Typography>
        </div>
    )

}

export default Heading;