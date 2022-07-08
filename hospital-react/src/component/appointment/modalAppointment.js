import  React , { useEffect,useState,useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';
import {GiHospitalCross} from 'react-icons/gi';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Autocomplete from '@mui/material/Autocomplete';




export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [hospitals, setHospitals] = useState([]);

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_92paflx', 'template_pkc9vii', form.current, '8RlWS9W8Hkw5XHjAD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

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

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ];
 

  return (
    <div>
      <Button variant="outlined" className='btn btn-primary' onClick={handleClickOpen}>
      make appointment now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><span className='logo'><GiHospitalCross /></span> Hospital_Inform</DialogTitle>
        <DialogContent>
         
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <form ref={form} onSubmit={sendEmail}>
      <DialogContent>

 <div className='row'>
    <div className='col-md-6'>
    <TextField
           autoFocus
           margin="dense"
           id="fname"
           label="First Name"
           type="text"
           fullWidth
           variant="standard"
         />
    </div>

    <div className='col-md-6'>
    <TextField
           autoFocus
           margin="dense"
           id="Lname"
           label="Last Name"
           type="text"
           fullWidth
           variant="standard"
         />
    </div>
 </div>

 <div className='row'>
    <div className='col-md-8'>
    <TextField
           autoFocus
           margin="dense"
           id="phone"
           label="Phone Number"
           type="number"
           fullWidth
           variant="standard"
         />
    </div>

    
 </div>

 <div className='row'>
 <div className='col-md-12'>
    <TextField
           autoFocus
           margin="dense"
           id="email1"
           label="Email Address"
           type="email"
           fullWidth
           variant="standard"
         />
    </div>
</div>

 <div className='row'>
    <div className='col-md-6'>
        <FormControl  fullWidth margin="dense">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Select your Regn
            </InputLabel>
            <NativeSelect
                fullWidth
                defaultValue={30}
                inputProps={{
                name: 'Regn',
                id: 'regn',
            }}
        >
         {hospitals.map(hospital =>(
             <option key={hospital.idHospital}> 
                 {hospital.regin} 
              </option>
               ))
             }
  </NativeSelect>
  </FormControl>
    </div>

    <div className='col-md-6'  fullWidth margin="dense">
    <FormControl  fullWidth margin="dense">

    <LocalizationProvider dateAdapter={AdapterDateFns} >
  <DateTimePicker
    renderInput={(props) => <TextField {...props} />}
    label="Date of Appointment"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
</LocalizationProvider>
</FormControl>
    </div>
 </div>

 <div className='row'>
      <div className='col-md-12'>
      <FormControl  fullWidth margin="dense">
      <FormLabel id="demo-controlled-radio-buttons-group">Hospital Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className='row'>
            <div className='col-md-6'>
                <FormControlLabel value="female" control={<Radio />} label="Gavernment" />
            </div>
            <div className='col-md-6'>
                <FormControlLabel value="male" control={<Radio />} label="praivet" />
            </div>
        </div>
      </RadioGroup>
    </FormControl>
    </div>
 </div>



<div className='row'>
      <div className='col-md-12'>
      <Autocomplete
      options={top100Films}
      id="hospital"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="List of Hospital in regn" variant="standard" />
        )}
      />
      </div>
    </div>

       </DialogContent>
    
       </form>
     
      </div>
    </Box>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Link to='/mainInterface'><li>Cancel</li></Link>
          </Button>
          <Button onClick={handleClose}>
            <Link to='/userInterface'><li>Go</li></Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
