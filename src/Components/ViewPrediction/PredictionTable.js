import React from 'react';
import useStyles from './Styling';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button, List, ListItem, ListItemText } from '@material-ui/core';


const Heading = ({ data, fetchPrediction, handleNext, handlePrev, page, totalPage, totalData }) => {
    const classes = useStyles();
    return (
        <div>
            <TableContainer classes={{ root: classes.tableContainer }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.tableHead }}>League</TableCell>
                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Team 1</TableCell>
                            <TableCell classes={{ root: classes.tableHead }} align="center">Team 2</TableCell>
                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Match Time</TableCell>
                            <TableCell classes={{ root: classes.tableHead }} align="center">Match Date</TableCell>
                            <TableCell classes={{ root: classes.tableHead_2 }} align="center">Match Tip</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value) => (
                            <TableRow key={value._id}>
                                <TableCell>{value.league}</TableCell>
                                <TableCell>{value.team_1}</TableCell>
                                <TableCell>{value.team_2}</TableCell>
                                <TableCell>{value.match_time}</TableCell>
                                <TableCell>{value.match_date}</TableCell>
                                <TableCell>{value.match_prediction}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box height={10} />
            <Box display="flex" flexDirection="row-reverse">
                <Button onClick={handleNext} classes={{ root: classes.pageButton }}>Next</Button>
                <Button onClick={handlePrev} classes={{ root: classes.pageButton }}>Prev</Button>
                <List>
                    <ListItem>
                        <ListItemText>Page {page} of {totalPage} totall Data {totalData}</ListItemText>
                    </ListItem>
                </List>
            </Box>
        </div>
    )

}

export default Heading;