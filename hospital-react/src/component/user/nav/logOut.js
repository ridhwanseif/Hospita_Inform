import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Log_Out
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
            </Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you ready to Log_Out.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Link to='/userInterface'><li>Cancel</li></Link>
          </Button>
          <Button onClick={handleClose}>
            <Link to='/mainInterface'><li>Log_Out</li></Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
