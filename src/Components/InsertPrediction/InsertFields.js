import React from 'react';
import { Container, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './Styling';
import 'date-fns';
import SnackBar from '../../Partials/SnackBar/SnackBar';

const InsertFields = ({ handleDate, handleTime, matchDate, matchTime, handleTip, match_tip, setLeague, setTeam1, setTeam2, handelInsert, open, handleClose, message  }) => {
    const classes = useStyles();
    return (
        <Container>
            <Box display='flex' flexDirection='column'>
                <form onSubmit={handelInsert}>
                    <Grid container spacing={9}>
                        <Grid item md={6} xs={12}>
                            <TextField label="League" fullWidth required onChange={(e) => { setLeague(e.target.value) }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Prediction</InputLabel>
                                <Select value={match_tip} onChange={handleTip}>
                                    <MenuItem value={'1'}>1</MenuItem>
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
                            <TextField label="Team 1" fullWidth required onChange={(e) => { setTeam1(e.target.value) }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField label="Team 1" fullWidth required onChange={(e) => { setTeam2(e.target.value) }} />
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
                                    label='Match Date'
                                    value={matchDate}
                                    onChange={handleDate}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker
                                    fullWidth
                                    label='Match Time'
                                    value={matchTime}
                                    onChange={handleTime}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item md={12}>
                            <Button fullWidth classes={{ root: classes.submit }} type='submit'>Save Prediction</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <SnackBar open = {open} handleClose = {handleClose} message = {message}/>
        </Container>
    )

}

export default InsertFields;