import React from 'react';
import { DialogContent, DialogActions, Dialog, DialogContentText, IconButton, Typography} from '@material-ui/core';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import useStyles from './Styling';

const MessageDialog = ({ dialog, handleDialog, id, is_correct }) => {
    const classes = useStyles();
    return (
        <Dialog
            open={dialog}
            onClose={handleDialog}
        >
            <DialogContent>
                <DialogContentText>Is this Prediction Correct or Not ?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <IconButton  onClick={()=>{is_correct(id, 'yes'); handleDialog()}} classes={{ root: classes.edit }}><Typography classes={{root: classes.dialog_label}}>Yes</Typography><ThumbUp/></IconButton>
                <IconButton onClick={()=>{is_correct(id, 'no'); handleDialog()}} classes={{ root: classes.remove }}><Typography classes={{root: classes.dialog_label}}>No</Typography><ThumbDown/></IconButton>
            </DialogActions>
        </Dialog>
    )

}

export default MessageDialog;