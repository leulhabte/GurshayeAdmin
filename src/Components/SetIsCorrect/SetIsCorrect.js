import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Heading from './Heading';
import PredictionTable from './PredictionTable';
import MessageDialog from './MessageDialog_1';
import Cookies from 'js-cookie';
import Loading from '../../Partials/Loading/Loading';
import axios from 'axios';

const SetIsCorrect = ({ history }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const [dialog, setDialog] = useState(false)
    const [id, setId] = useState("");
    // ---------------

    // ---------------
    const handleDialog = () => {
        setDialog(!dialog)
    }
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
        fetchPrediction(1, 4);
    }, [])

    useEffect(() => {
        fetchPrediction(page, 4);
    }, [page])

    const fetchPrediction = (page, perPage) => {
        setLoading(true)
        axios.get(`api/betting_tips/get_iscorrect/?page=${page}&&perPage=${perPage}&&is=N/A`,{
            headers: {
                'Authorization': Cookies.get('jwt')
            }
        })
            .then(res => {
                setData(res.data.un_marked)
                setPage(res.data.page)
                setTotalPage(res.data.total_pages)
                setTotalData(res.data.total_data)
                setLoading(false)
            }).catch(err => console.log(err))
    }

    const removePreditcion = async (id) => {
        try {
            setLoading(true)
            const res = await axios.post(`api/betting_tips/remove?_id=${id}`, null, {
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            if (res.status === 200) { fetchPrediction(page, 4) }
        } catch (error) {
            alert(error.message)
        }
    }

    const is_correct = async(id, is)=>{
        try {
            setLoading(true)
            const res = await axios.post(`api/betting_tips/setCorrect?_id=${id}&&is=${is}`, null, {
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            if (res.status === 200) { fetchPrediction(page, 4) }
        } catch (error) {
            setLoading(false)
            alert(error.message)
        }
    }
    return (
        <Container>
            <Heading />
            <Box height={40} />
            <div>
                {loading ? <Loading /> :
                    (<div>
                        <PredictionTable data={data} fetchPrediction={fetchPrediction}
                            handleNext={handleNext} handlePrev={handlePrev} page={page} totalPage={totalPage} totalData={totalData}
                            removePreditcion={removePreditcion} handleDialog={handleDialog} setId={setId} setDialog={setDialog} />
                        <MessageDialog handleDialog={handleDialog} id={id} dialog={dialog} is_correct={is_correct} />
                    </div>)}
            </div>
        </Container>
    )

}

export default SetIsCorrect;