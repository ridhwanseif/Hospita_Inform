import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GiHospitalCross} from 'react-icons/gi';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';



export default function FormDialog() {

  const [open, setOpen] = React.useState(false);
  const [hospitals, setHospitals] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:8080/hospital/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setHospitals(result);
      }
      )
    },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const top100Films = [
  //   { label: 'The Shawshank Redemption', year: 1994 },
  //   { label: 'The Godfather', year: 1972 },
  //   { label: 'The Godfather: Part II', year: 1974 },
  //   { label: 'The Dark Knight', year: 2008 },
  //   { label: '12 Angry Men', year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: 'Pulp Fiction', year: 1994 }
    
  // ];

  return (
    <div>
      <Button variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
      Feedbock.
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><span className='logo'><GiHospitalCross /></span> Hospital_Inform</DialogTitle>
        
        <DialogContent>
         
        
          <div className='row'>
            <div className='col-md-12'>
            <h5>Hi.</h5>
            <h6>Thank you for taking the time to write this, and for pointing out these issues.</h6>
            </div>

          </div>
          <hr/>
          <div className='row'>
            <div className='col-md-12'>
            <h5>this is your feedback for your search</h5>
           
            <div className='row'>
              <div className='col-md-6'><h6>Hospital Name:</h6></div>
              <div className='col-md-6'></div>
            </div>

            <div className='row'>
              <div className='col-md-6'><h6>Location:</h6></div>
              <div className='col-md-6'></div>
            </div>

            <div className='row'>
              <div className='col-md-6'><h6>Email</h6></div>
              <div className='col-md-6'></div>
            </div>

            <div className='row'>
              <div className='col-md-6'><h6>Regin</h6></div>
              <div className='col-md-6'></div>
            </div>

            <div className='row'>
              <div className='col-md-6'>Status</div>
              <div className='col-md-6'></div>
            </div>

            </div>
           
          </div>

          <hr/>
 
    <div className='row'>
      <div className='col-md-12'>
        <h6>click here to make Appointment</h6>
      <Button onClick={handleClose}>
            Appointment
          </Button>
      </div>
    </div>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
