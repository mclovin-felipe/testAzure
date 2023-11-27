import * as React from 'react';
import {Dialog, DialogActions,DialogContent, DialogContentText, Button, DialogTitle } from '@mui/material';

const Modal = ({ response, onOkClick }) => {
  const [openModal, setOpenModal] = React.useState(true);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    onOkClick();
  };

  return (
    <React.Fragment>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {response.codigoRespuesta == 0 ? response.result : response.desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Modal