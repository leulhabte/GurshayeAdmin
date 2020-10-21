import React from 'react';
import useStyles from './Styling';
import {Box, Typography} from '@material-ui/core';

const Heading =()=>{
    const classes = useStyles();
    return(
        <div>
            <Box display='flex' justifyContent='center' alignItems = 'center' p={2}>
                <Typography classes = {{root: classes.heading_title}}>Gurshaye Admin</Typography>
            </Box>
        </div>
    )

}

export default Heading;