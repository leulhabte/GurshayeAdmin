import React, { useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import Heading from './Heading';
import UpdateFields from './UpdateFields';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loading from '../../../Partials/Loading/Loading'

const UpdatePrediction = ({ history }) => {
    const [matchTime, setTime] = React.useState(new Date('2020-08-18T09:30:54'));
    const [matchDate, setDate] = React.useState(new Date('2020-08-18T21:11:54'));
    const [match_tip, setMatchTip] = React.useState('')
    const [team1, setTeam1] = React.useState('');
    const [team2, setTeam2] = React.useState('');
    const [league, setLeague] = React.useState('');
    const [id, setId] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        const { league, match_prediction, team_1, team_2, _id, match_time } = history.location.state.data;
        setMatchTip(match_prediction);
        setLeague(league);
        setTeam1(team_1);
        setTeam2(team_2);
        setId(_id);
    }, []);

    const handleTip = (event) => {
        setMatchTip(event.target.value)
    }
    const handleTime = time => {
        setTime(time)
    }

    const handleDate = date => {
        setDate(date)
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(league)
        console.log(team1)
        console.log(team2)
        console.log(match_tip)
        console.log(matchDate.toDateString())
        console.log(matchTime.toTimeString().toString().slice(0, 8));
        try {
            setLoading(true)
            const res = await axios.post(`api/betting_tips/updatePrediction/?id=${id}`, {
                league,
                team_1: team1,
                team_2: team2,
                match_time: matchTime.toLocaleTimeString(),
                match_date: matchDate.toDateString(),
                match_prediction: match_tip
            },{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            if (res.status === 200) { setLoading(false); history.replace('/manage') }
        } catch (error) {
            setLoading(false)
            setMessage("Something went wrong Prediction not saved")
            setOpen(true);
        }
    }
    return (
        <Container>
            <Heading />
            <Box height={40} />
            {loading ? <Loading/> :
                <UpdateFields league={league} team1={team1} team2={team2} match_tip={match_tip}
                    match_date={history.location.state.data.match_date} handleTip={handleTip} handleTime={handleTime} handleDate={handleDate}
                    setLeague={setLeague} setTeam1={setTeam1} setTeam2={setTeam2}
                    match_time={matchTime} handleUpdate={handleUpdate} open={open} handleClose={handleClose} message={message} />}
        </Container>
    )

}

export default UpdatePrediction;