import React from 'react';
import useStyles from '../Styling';
import {Typography, Breadcrumbs} from '@material-ui/core';


const Heading =({title})=>{
    const classes = useStyles();
    return(
        <div>
            <Breadcrumbs>
                <Typography>Dashboard</Typography>
                <Typography>Manage Prediction</Typography>
                <Typography>Update Prediction</Typography>
            </Breadcrumbs>
            <Typography classes = {{root: classes.heading}}>Update Prediction</Typography>
        </div>
    )

}

export default Heading;