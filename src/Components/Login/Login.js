import React from 'react';
import useStyles from './Styling';
import { Container, Paper, Box, TextField, Button, Typography, Grid } from '@material-ui/core';
import { AccountCircle, Fingerprint } from '@material-ui/icons'

const LogIn = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box height = {50}/>
            <Box display = 'flex' flexDirection = 'row' justifyContent = 'center' alignItems = 'center'><Typography variant='h5'>Welcome</Typography></Box>
            <Grid container classes ={{root: classes.grid}}>
                <Grid item md={7}>
                    <Paper>
                        <Box display='flex' flexDirection='column' p = {5}>
                            <Box display = 'flex' flexDirection = 'row' justifyContent = 'center' alignItems = 'center'>
                                <Box flexShrink={0} display = 'flex'  justifyContent = 'center' alignItems = 'center' paddingTop = {2}><AccountCircle classes = {{root: classes.iconBtn}}/></Box>
                                <Box width = {20}/>
                                <Box flexGrow={1}><TextField fullWidth label='User name' /></Box>
                            </Box>
                            <Box height = {30}/>
                            <Box display = 'flex' flexDirection = 'row' justifyContent = 'center' alignItems = 'center'>
                                <Box flexShrink={0} display = 'flex'  justifyContent = 'center' alignItems = 'center' paddingTop = {2}><Fingerprint classes = {{root: classes.iconBtn}} /></Box>
                                <Box width = {20}/>
                                <Box flexGrow={1}><TextField fullWidth label='Password' /></Box>
                            </Box>
                            <Box height = {30}/>
                            <Button classes = {{root: classes.btn}}>Log in</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )

}

export default LogIn;