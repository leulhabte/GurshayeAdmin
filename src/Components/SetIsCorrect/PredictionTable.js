import React from 'react';
import useStyles from './Styling';
import { withStyles, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Box, Button, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import ContactSupport from '@material-ui/icons/ContactSupport';
import {withRouter} from 'react-router-dom';

const Heading = ({ data, is_correct, handleNext, handlePrev, page, totalPage, totalData, setDialog, setId, handleDialog, history }) => {
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
    return (
        <div>
            <TableContainer classes={{ root: classes.tableContainer }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{root: classes.tableHead}}>League</TableCell>
                            <TableCell classes={{root: classes.tableHead_2}} align="center">Team 1</TableCell>
                            <TableCell classes={{root: classes.tableHead}} align="center">Team 2</TableCell>
                            <TableCell classes={{root: classes.tableHead_2}} align="center">Match Time</TableCell>
                            <TableCell classes={{root: classes.tableHead}} align="center">Match Date</TableCell>
                            <TableCell classes={{root: classes.tableHead_2}} align="center">Match Tip</TableCell>
                            <TableCell classes={{root: classes.tableHead}} align="center">Is Correct?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value) => (
                            <StyledTableRow key={value._id} hover = {true}>
                                <TableCell>{value.league}</TableCell>
                                <TableCell>{value.team_1}</TableCell>
                                <TableCell>{value.team_2}</TableCell>
                                <TableCell>{value.match_time}</TableCell>
                                <TableCell>{value.match_date}</TableCell>
                                <TableCell align="center">{value.match_prediction}</TableCell>
                                <TableCell align="center">
                                    <Box display='flex' flexDirection='row' justifyContent="center">
                                        <IconButton onClick={() => { setDialog(true); setId(value._id) }}><ContactSupport classes={{ root: classes.edit }} /></IconButton>
                                    </Box>
                                </TableCell>
                            </StyledTableRow>
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

export default withRouter(Heading);