import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Heading from './Heading';
import PredictionTable from './PredictionTable';
import axios from 'axios';

const ManagePrediction = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    useEffect(() => {
        fetchPrediction(1, 2);
    }, [])

    useEffect(() => {
        fetchPrediction(page, 2);
    }, [page])

    const fetchPrediction = async (page, perPage) => {
        try {
            const res = await axios.get(`api/betting_tips/getPrediction/?page=${page}&perPage=${perPage}`)
            setData(res.data.betting_tips)
            setPage(res.data.page)
            setTotalPage(res.data.total_pages)
            setTotalData(res.data.total_data)
            console.log(res)
            console.log(page)
        } catch (error) {
            console.log(error)
        }
    }

    const removePreditcion = async (id)=>{
        try {
            const res = await axios.post(`api/betting_tips/remove?_id=${id}`);
            if(res.status === 200){
                window.location.reload();
            }
        } catch (error) {
            
        }
    }
    return (
        <Container>
            <Heading />
            <Box height={40} />
            <PredictionTable data={data} fetchPrediction={fetchPrediction}
                handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData = {totalData}
                removePreditcion = {removePreditcion}/>
        </Container>
    )

}

export default ManagePrediction;