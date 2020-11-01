import { Box, Container } from '@material-ui/core';
import React from 'react';
import Heading from './Heading';
import InsertFields from './InsertFields';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loading from '../../Partials/Loading/Loading'

const InsertPrediction = () => {
    const [matchTime, setTime] = React.useState(new Date('2020-08-18T21:11:54'));
    const [matchDate, setDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [match_tip, setMatchTip] = React.useState('1')
    const [team1, setTeam1] = React.useState("");
    const [team2, setTeam2] = React.useState("");
    const [league, setLeague] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleTip = (event) => {
        setMatchTip(event.target.value)
    }
    const handleTime = time => {
        setTime(time)
    }

    const handleDate = date => {
        setDate(date)
    }
    const handelInsert = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`api/betting_tips/postTip`, {
                league,
                team_1: team1,
                team_2: team2,
                match_time: matchTime.toLocaleTimeString(),
                match_date: matchDate.toDateString(),
                match_prediction: match_tip
            }, { headers: { 'Authorization': Cookies.get('jwt') } })
            if (res.status === 201) { setLoading(false); setMessage("Prediction saved successfully"); setOpen(true) }
        } catch (error) {
            setLoading(false);
            setMessage("Something went wrong Prediction not saved")
            setOpen(true);
        }
    }
    return (
        <Container>
            <Heading />
            <Box height={40} />
            {loading ? <Loading /> :
                <InsertFields handleTip={handleTip} handleDate={handleDate}
                    handleTime={handleTime} matchDate={matchDate}
                    matchTime={matchTime} match_tip={match_tip}
                    setTeam1={setTeam1} setTeam2={setTeam2} setLeague={setLeague}
                    handelInsert={handelInsert} open={open} handleClose={handleClose} message={message} />}
        </Container>
    )

}

export default InsertPrediction;