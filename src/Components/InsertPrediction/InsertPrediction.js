import { Box } from '@material-ui/core';
import React from 'react';
import Heading from './Heading';
import InsertFields from './InsertFields';

const InsertPrediction =()=>{
    return(
        <div>
            <Heading/>
            <Box height = {40}/>
            <InsertFields/>
        </div>
    )

}

export default InsertPrediction;