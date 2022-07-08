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
import FeedBack from './feedback/feedback';
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
      Search Of Niearest
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><span className='logo'><GiHospitalCross /></span> Hospital_Inform</DialogTitle>
        
        <DialogContent>
         
        
          <div className='row'>
            <div className='col-md-8'>
            <FormControl  fullWidth>
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
    <option key={hospital.idHospital}> {hospital.regin} </option>
   
    ))
  }
  </NativeSelect>
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
                <FormControlLabel value="female" control={<Radio />} label="Government" />
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
      {/* <Autocomplete
      options={top100Films}
      id="hospital"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="List of Hospital in regn" variant="standard" />
        )}
      /> */}
                 <FormControl  fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            List of Regin Hospital
  </InputLabel>
  <NativeSelect
   fullWidth
    defaultValue={30}
    inputProps={{
      name: 'Hospital_Regn',
      id: 'regn_Hospital',
    }}
  >
     {hospitals.map(hospital =>(
    <option key={hospital.idHospital}> {hospital.name} </option>
   
    ))
  }
  </NativeSelect>
  </FormControl>
      </div>
    </div>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button>
            <FeedBack/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
