import React from 'react';
import { Tab, AppBar, Tabs, Box } from '@material-ui/core';
import ApexChart from './ApexChart';
import Status2 from './Status_2';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DashTab = ({ option, series, option2, lineSeries, loading_2, loading_3, loading_4, loading_5, loading_6, correct_count, incorrect_count, unlabeled_count }) => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Graphical Presentation" {...a11yProps(0)} />
                    <Tab label="Labeled Predictions" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ApexChart option={option} series={series} option2={option2} lineSeries={lineSeries} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Status2 loading_4 = {loading_4} loading_5 = {loading_5} loading_6 = {loading_6} correct_count = {correct_count} incorrect_count = {incorrect_count} unlabeled_count = {unlabeled_count}/>
            </TabPanel>
        </div>

    )

}

export default DashTab;