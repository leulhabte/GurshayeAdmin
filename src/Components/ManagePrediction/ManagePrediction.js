import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Heading from './Heading';
import PredictionTable from './PredictionTable';
import MessageDialog from './MessageDialog';
import Cookies from 'js-cookie';
import Loading from '../../Partials/Loading/Loading';
import axios from 'axios';
import SnackBar from '../../Partials/SnackBar/SnackBar';

const ManagePrediction = ({ history }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const [dialog, setDialog] = useState(false)
    const [id, setId] = useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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
        fetchPrediction(1, 2);
    }, [])

    useEffect(() => {
        fetchPrediction(page, 4);
    }, [page])

    const fetchPrediction = (page, perPage) => {
        setLoading(true)
        axios.get(`api/betting_tips/getPrediction/?page=${page}&perPage=${perPage}`,{
            headers: {
                'Authorization': Cookies.get('jwt')
            }
        })
            .then(res => {
                setData(res.data.betting_tips)
                setPage(res.data.page)
                setTotalPage(res.data.total_pages)
                setTotalData(res.data.total_data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                setMessage("Something went wrong Try again")
                // setOpen(true);
            })
    }

    const removePreditcion = async (id) => {
        try {
            setLoading(true)
            const res = await axios.post(`api/betting_tips/remove?_id=${id}`, null, {
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            if (res.status === 200) { fetchPrediction(page, 4); setOpen(true); setMessage("Prediction removed successfully") }
        } catch (error) {
            setLoading(false)
            setMessage("Something went wrong Try again")
            setOpen(true);
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
                        <MessageDialog handleDialog={handleDialog} id={id} dialog={dialog} removePreditcion={removePreditcion} />
                    </div>)}
            </div>
            <SnackBar open={open} handleClose = {handleClose} message = {message}/>
        </Container>
    )

}

export default ManagePrediction;