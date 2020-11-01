import React from 'react';
import Chart from 'react-apexcharts';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const ApexChart = ({ option, series, option2, lineSeries, loading_2, loading_3 }) => {
    return (
        <div>
            <Grid container>
                {!loading_2 &&
                    <Grid item md={6} xs={12}>
                        <Chart
                            options={option}
                            series={series}
                            type='donut'
                            width='400px'
                        />
                    </Grid>}
                {loading_2 &&
                    <Grid item md={6} xs={12}>
                        <Skeleton
                            variant="rect"
                            width="100%"
                            height="100%"
                        />
                    </Grid>}
                {!loading_3 &&
                    <Grid item md={6} xs={12}>
                        <Chart
                            options={option2}
                            series={lineSeries}
                            type='line'
                            width='100%'
                            height="240px"
                        />
                    </Grid>}
                {loading_3 &&
                    <Grid item md={6} xs={12}>
                        <Chart
                            options={option}
                            series={series}
                            type='donut'
                            width='400px'
                        />
                    </Grid>}
            </Grid>
        </div>
    )

}

export default ApexChart;