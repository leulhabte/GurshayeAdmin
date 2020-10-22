import React from 'react';
import useStyles from './Styling';
import Heading from './Heading';
import Status from './Status';
import Footer from './Footer';
import {Container, Box, Paper, Typography, Breadcrumbs} from '@material-ui/core';


const Dashboard =()=>{
    const classes = useStyles();
    return(
        <Container>
           <Heading/>
            <Status/>
            <Box height = {50}/>
            <Footer/>
        </Container>
    )

}

export default Dashboard;