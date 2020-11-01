import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function SimpleSnackbar({handleClose, open, message}) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Close
            </Button>
          </React.Fragment>
        }
      />
    </div>
  );
}