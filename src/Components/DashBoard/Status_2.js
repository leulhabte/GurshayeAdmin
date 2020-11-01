import React from 'react';
import useStyles from './Styling';
import { Box, Paper, Typography, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Assessment } from '@material-ui/icons';


const Dashboard = ({ correct_count, incorrect_count, unlabeled_count, loading_4, loading_5, loading_6 }) => {
    const classes = useStyles();
    return (
        <div>
            <Box height={40} />
            <Grid container spacing={5}>
                <Grid item lg={4} xs={12}>
                    <Paper>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexGrow={1} flexDirection='column' classes={{ root: classes.prediction_box }} justifyContent='center' alignItems='center' p={3}>
                                <Typography>Correct Predictions</Typography>
                                <Box height={10} />
                                {!loading_4 && <Typography classes={{ root: classes.stat_typo }}>{correct_count}</Typography>}
                                {loading_4 && <Skeleton variant='text' width={70} height={40} />}
                            </Box>
                            <Box display='flex' flexGrow={2} flexDirection='column' classes={{ root: classes.prediction_box_2 }} justifyContent='center' alignItems='center' p={3}>
                                <Assessment classes={{ root: classes.equilizer }} />
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Paper>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexGrow={1} flexDirection='column' classes={{ root: classes.prediction_box_5 }} justifyContent='center' alignItems='center' p={3}>
                                <Typography>Incorrect Predictions</Typography>
                                <Box height={10} />
                                {!loading_5 && <Typography classes={{ root: classes.stat_typo }}>{incorrect_count}</Typography>}
                                {loading_5 && <Skeleton variant='text' width={70} height={40} />}
                            </Box>
                            <Box display='flex' flexGrow={2} flexDirection='column' classes={{ root: classes.prediction_box_6 }} justifyContent='center' alignItems='center' p={3}>
                                <Assessment classes={{ root: classes.equilizer }} />
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Paper>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexGrow={1} flexDirection='column' classes={{ root: classes.prediction_box_3 }} justifyContent='center' alignItems='center' p={3}>
                                <Typography>Unlabeled Predictions</Typography>
                                <Box height={10} />
                                {!loading_6 && <Typography classes={{ root: classes.stat_typo }}>{unlabeled_count}</Typography>}
                                {loading_6 && <Skeleton variant='text' width={70} height={40} />}
                            </Box>
                            <Box display='flex' flexGrow={2} flexDirection='column' classes={{ root: classes.prediction_box_4 }} justifyContent='center' alignItems='center' p={3}>
                                <Assessment classes={{ root: classes.equilizer }} />
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )

}

export default Dashboard;