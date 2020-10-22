import React from 'react';
import useStyles from './Styling';
import {Typography, Breadcrumbs} from '@material-ui/core';


const Heading =()=>{
    const classes = useStyles();
    return(
        <div>
            <Breadcrumbs>
                <Typography>Dashboard</Typography>
                <Typography>Insert Prediction</Typography>
            </Breadcrumbs>
            <Typography classes = {{root: classes.heading}}>Insert Prediction</Typography>
        </div>
    )

}

export default Heading;