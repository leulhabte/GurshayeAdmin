import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import Status from './Status';
import Footer from './Footer';
import DashTab from './DashTab';
import { Container, Box } from '@material-ui/core';
import axios from 'axios';
import Cookies from 'js-cookie'

const Dashboard = () => {
    const [series, setSeries] = useState([]);
    const [count, setCount] = useState(0);
    const [correct_count, setCorrectCount] = useState(0);
    const [incorrect_count, setIncorrectCount] = useState(0);
    const [unlabeled_count, setUnlabeledCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loading_2, setLoading2] = useState(true);
    const [loading_3, setLoading3] = useState(true);
    const [loading_4, setLoading4] = useState(true);
    const [loading_5, setLoading5] = useState(true);
    const [loading_6, setLoading6] = useState(true);
    const [option, setOption] = React.useState({
        labels: []
    });
    const [option2, setOption2] = React.useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: []
        }
    });
    const [lineSeries, setLineSeries] = React.useState([
        {
            name: "",
            data: []
        }
    ]);

    useEffect(() => {
        fetchLeagues();
    }, []);

    const fetchLeagues = async () => {
        try {
            // Getting Data For Pie Chart
            const res = await axios.get('api/betting_tips/getleagues', {
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            const leagues = [];
            const leagueCount = [];
            res.data.Leagues.map(leagueInfo => {
                leagues.push(leagueInfo.name)
                leagueCount.push(leagueInfo.count)
            });
            const lable = { labels: leagues }
            setOption(lable);
            setSeries(leagueCount);
            setLoading2(false);

            // Getting Data For Line Chart
            const res_2 = await axios.get('api/betting_tips/insertedAtStat',{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            const label = [];
            const datas = [];
            res_2.data.statistics.map(data => {
                label.push(data.name);
                datas.push(data.count);
                return data;
            });
            const option = {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: label
                }
            };
            const series = [{
                name: 'Predictions Inserted',
                data: datas
            }]
            setOption2(option);
            setLineSeries(series);
            setLoading3(false)

            // Getting Total Prediction Counts
            const res_3 = await axios.get('api/betting_tips/get_count/?is=total',{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            setCount(res_3.data.total_data)
            setLoading(false)

            // Getting Correct Prediction Counts
            const res_4 = await axios.get('api/betting_tips/get_count/?is=yes',{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            setCorrectCount(res_4.data.total_data)
            setLoading4(false)

            // Getting Incorrect Prediction Counts
            const res_5 = await axios.get('api/betting_tips/get_count/?is=no',{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            setIncorrectCount(res_5.data.total_data)
            setLoading5(false)

            // Getting Un Labeled Prediction Counts
            const res_6 = await axios.get('api/betting_tips/get_count/?is=N/A',{
                headers: {
                    'Authorization': Cookies.get('jwt')
                }
            })
            setUnlabeledCount(res_6.data.total_data)
            setLoading6(false)

        } catch (error) {
            fetchLeagues()
        }
    }

    return (
        <Container>
            <Heading />
            <Status count={count} loading={loading} />
            <Box height={40} />
            <Footer />
            <DashTab option={option} series={series} option2={option2} lineSeries={lineSeries} loading_2={loading_2} loading_3={loading_3}
            correct_count = {correct_count} incorrect_count = {incorrect_count} unlabeled_count = {unlabeled_count}
            loading_4 = {loading_4} loading_5 = {loading_5} loading_6 = {loading_6} />
        </Container>
    )

}

export default Dashboard;