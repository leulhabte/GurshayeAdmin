import React, {useState} from 'react';
import useStyles from './Styling';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button, List, ListItem, ListItemText, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Heading = ({ data, removePreditcion, handleNext, handlePrev, page, totalPage, totalData}) => {
    const classes = useStyles();
    const [id, setId] = useState("");
    return (
        <div>
            <TableContainer classes = {{root: classes.tableContainer}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>League</TableCell>
                            <TableCell>Team 1</TableCell>
                            <TableCell>Team 2</TableCell>
                            <TableCell>Match Time</TableCell>
                            <TableCell>Match Date</TableCell>
                            <TableCell>Match Tip</TableCell>
                            <TableCell align="center">Action</TableCell>
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
                                <TableCell  align="center">
                                    <Box display = 'flex' flexDirection = 'row' justifyContent="center">
                                        <IconButton><EditIcon classes = {{root: classes.edit}}/></IconButton>
                                        <IconButton onClick = {()=>{setId(value._id); removePreditcion(id)}}><DeleteIcon classes = {{root: classes.remove}}/></IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box height = {10}/>
            <Box display="flex" flexDirection="row-reverse">
                <Button onClick={handleNext} classes ={{root: classes.pageButton}}>Next</Button>
                <Button onClick={handlePrev} classes ={{root: classes.pageButton}}>Prev</Button>
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