import React from 'react';
import useStyles from './Styling';
import {Container, Box, Paper, Typography, Breadcrumbs, Grid} from '@material-ui/core';
import { Equalizer } from '@material-ui/icons';


const Dashboard =()=>{
    const classes = useStyles();
    return(
        <div>
            <Box height = {50}/>
            <Grid container spacing = {5}>
                <Grid item lg={6} xs = {12}>
                    <Paper>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexGrow={1} flexDirection='column' classes = {{root: classes.prediction_box}} justifyContent='center' alignItems='center' p={3}>
                                <Typography>Total Prediction</Typography>
                                <Box height = {10}/>
                                <Typography classes = {{root: classes.stat_typo}}>1230</Typography>
                            </Box>
                            <Box display='flex' flexGrow={2} flexDirection='column' classes = {{root: classes.prediction_box_2}} justifyContent='center' alignItems='center' p={3}>
                                <Equalizer classes = {{root: classes.equilizer}}/>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={6} xs = {12}>
                    <Paper>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexGrow={1} flexDirection='column' classes = {{root: classes.prediction_box_3}} justifyContent='center' alignItems='center' p={3}>
                                <Typography>Account Status</Typography>
                                <Box height = {10}/>
                                <Typography classes = {{root: classes.stat_typo}}>Active</Typography>
                            </Box>
                            <Box display='flex' flexGrow={2} flexDirection='column' classes = {{root: classes.prediction_box_4}} justifyContent='center' alignItems='center' p={3}>
                                <Equalizer classes = {{root: classes.equilizer}}/>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )

}

export default Dashboard;