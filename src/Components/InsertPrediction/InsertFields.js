import React from 'react';
import { Container, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './Styling';
import 'date-fns';

const InsertFields = () => {
    const [macthTime, setTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [macthDate, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const classes = useStyles();
    const handleTime = time => {
        setTime(time)
    }

    const handleDate = date => {
        setDate(date)
    }
    return (
        <Container>
            <Box display='flex' flexDirection='column'>
                <Grid container spacing={9}>
                    <Grid item md={6} xs={12}>
                        <TextField label="League" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Prediction</InputLabel>
                            <Select>
                                <MenuItem value={'1'} fullWidth>1</MenuItem>
                                <MenuItem value={'1x'}>1x</MenuItem>
                                <MenuItem value={'2'}>2</MenuItem>
                                <MenuItem value={'2x'}>2x</MenuItem>
                                <MenuItem value={'Over 2.5'}>Over 2.5</MenuItem>
                                <MenuItem value={'Under 2.5'}>Over 2.5</MenuItem>
                                <MenuItem value={'BTTS'}>BTTS</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField label="Team 1" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField label="Team 1" fullWidth />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                fullWidth
                                label='Match Date'
                                value={macthDate}
                                onChange={handleDate}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker
                                fullWidth
                                label='Match Time'
                                value={macthTime}
                                onChange={handleTime}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item md={12}>
                        <Button fullWidth classes={{root: classes.submit}}>Save Prediction</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}

export default InsertFields;