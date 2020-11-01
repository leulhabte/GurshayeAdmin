import React from 'react';
import { DialogContent, DialogActions, Dialog, Button, DialogContentText } from '@material-ui/core';

const MessageDialog = ({ dialog, handleDialog, id, removePreditcion }) => {
    return (
        <Dialog
            open={dialog}
            onClose={handleDialog}
        >
            <DialogContent>
                <DialogContentText>Are you sure to remove this tip?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={()=>{removePreditcion(id); handleDialog()}}>Yes</Button>
                <Button color='primary' onClick={handleDialog}>No</Button>
            </DialogActions>
        </Dialog>
    )

}

export default MessageDialog;