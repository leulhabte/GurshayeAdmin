import React, { useState } from 'react';
import useStyles from './Styling';
import { Container, Paper, Box, TextField, Button, Typography, Grid } from '@material-ui/core';
import { AccountCircle, Fingerprint, LockOpen, Security } from '@material-ui/icons';
import axios from 'axios';
import Loading from '../../Partials/Loading/Loading';
import SnackBar from '../../Partials/SnackBar/SnackBar';

const LogIn = ({ handelUser }) => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [new_password, setPassword2] = useState("")
    const [password3, setPassword3] = useState("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const _handelUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (new_password !== password3) {
                setLoading(false)
                setMessage("Password Didn't match")
                setOpen(true)
            } else {
                const res = await axios.post('api/user/changeProfile', { name, password, new_password })
                if (res.status === 200) {
                    handelUser(res.data.profile.Name, res.data.token)
                }
            }
        } catch (error) {
            setLoading(false)
            setMessage("Error Input Provided Try again")
            setOpen(true)
        }

    }
    return (
        <div>
            { loading ? <Loading /> : (
                <Container>
                    <Box height={50} />
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'><Typography variant='h5'>Update Profile</Typography></Box>
                    <Grid container classes={{ root: classes.grid }}>
                        <Grid item md={7}>
                            <form onSubmit={_handelUpdate}>
                                <Paper>
                                    <Box display='flex' flexDirection='column' p={5}>
                                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                                            <Box flexShrink={0} display='flex' justifyContent='center' alignItems='center' paddingTop={2}><AccountCircle classes={{ root: classes.iconBtn }} /></Box>
                                            <Box width={20} />
                                            <Box flexGrow={1}><TextField fullWidth required label='Username/New Username' name="usename" type="text"
                                                inputProps={{ minLength: 4, maxLength: 25 }}
                                                onChange={(e) => { setName(e.target.value) }} /></Box>
                                        </Box>
                                        <Box height={30} />
                                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                                            <Box flexShrink={0} display='flex' justifyContent='center' alignItems='center' paddingTop={2}><LockOpen classes={{ root: classes.iconBtn }} /></Box>
                                            <Box width={20} />
                                            <Box flexGrow={1}><TextField fullWidth required label='Previous Password' name="password" type="password"
                                                inputProps={{ minLength: 4 }}
                                                onChange={(e) => { setPassword(e.target.value) }} /></Box>
                                        </Box>
                                        <Box height={30} />
                                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                                            <Box flexShrink={0} display='flex' justifyContent='center' alignItems='center' paddingTop={2}><Fingerprint classes={{ root: classes.iconBtn }} /></Box>
                                            <Box width={20} />
                                            <Box flexGrow={1}><TextField fullWidth required label='New-Password' name="password" type="password"
                                                inputProps={{ minLength: 4 }}
                                                onChange={(e) => { setPassword2(e.target.value) }} /></Box>
                                        </Box>
                                        <Box height={30} />
                                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                                            <Box flexShrink={0} display='flex' justifyContent='center' alignItems='center' paddingTop={2}><Security classes={{ root: classes.iconBtn }} /></Box>
                                            <Box width={20} />
                                            <Box flexGrow={1}><TextField fullWidth required label='Retype-New-Password' name="password" type="password"
                                                inputProps={{ minLength: 4 }}
                                                onChange={(e) => { setPassword3(e.target.value) }} /></Box>
                                        </Box>
                                        <Box height={30} />
                                        <Button classes={{ root: classes.btn }} type="submit">Update Profile</Button>
                                    </Box>
                                </Paper>
                            </form>
                        </Grid>
                    </Grid>
                    <SnackBar open={open} handleClose={handleClose} message={message} />
                </Container>
            )
            }</div>
    )

}

export default LogIn;