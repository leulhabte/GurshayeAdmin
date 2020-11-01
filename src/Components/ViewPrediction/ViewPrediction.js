import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Heading from './Heading';
import PredictionTable from './PredictionTable';
import Loading from '../../Partials/Loading/Loading';
import axios from 'axios';
import Cookies from 'js-cookie';

const ViewPrediction = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(true);
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
        fetchPrediction(1, 7);
    }, [])

    useEffect(() => {
        fetchPrediction(page, 7);
    }, [page])

    const fetchPrediction = async (page, perPage) => {
        try {
            setLoading(true)
            const res = await axios.get(`api/betting_tips/getPrediction/?page=${page}&perPage=${perPage}`,{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            setData(res.data.betting_tips)
            setPage(res.data.page)
            setTotalPage(res.data.total_pages)
            setTotalData(res.data.total_data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <Heading />
            <Box height={40} />
            <div>
                {loading ? <Loading /> :
                    (<PredictionTable data={data} fetchPrediction={fetchPrediction}
                        handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData} />)}
            </div>
        </Container>
    )

}

export default ViewPrediction;