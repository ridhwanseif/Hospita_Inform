import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';
import {GiHospitalCross} from 'react-icons/gi';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
        Log_In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><span className='logo'><GiHospitalCross /></span> Hospital_Inform</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="email1"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password1"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Link to='/mainInterface'><li>Cancel</li></Link>
          </Button>
          <Button onClick={handleClose}>
            <Link to='/userInterface'><li>logIn</li></Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
