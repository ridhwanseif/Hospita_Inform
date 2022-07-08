import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';



export default function Doctor() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hospital_NAme, sethospital_NAme] = useState('');
  const [location, setLocation] = useState('');
  const [professionalism, setProfessionalism] = useState('');

  // const [doctors,setDoctor] = useState([]);

  const handleAdd=(e)=>{
    e.preventDefault()
    const doctor={name,email,hospital_NAme,location,professionalism}
    console.log(doctor)
    fetch("http://localhost:8080/doctor/add",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(doctor)

    }).then(()=>{
      console.log("New Doctor added")
    })
  }

  // useEffect(()=>{
  //   fetch("http://localhost:8080/doctor/getAll")
  //   .then(res=>res.json())
  //   .then((result)=>{
  //     setDoctor(result);
  //   }
  //   )
  // },[])

  return (
    <div>
      <Button variant="outlined" class="btn btn-primary" onClick={handleClickOpen}>
      <AddCircleIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Doctor</DialogTitle>
      
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="hospital_NAme"
            type="text"
            fullWidth
            variant="standard"
            value={hospital_NAme}
            onChange={(e)=>sethospital_NAme(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="location"
            type="text"
            fullWidth
            variant="standard"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="professionalism"
            type="text"
            fullWidth
            variant="standard"
            value={professionalism}
            onChange={(e)=>setProfessionalism(e.target.value)}
          />
        
        {/* {doctors.map(doctor =>(
          Id:{doctor.id}
          Name:{doctor.name}
          hospital_NAme:{doctor.hospital_NAme}
          location:{doctor.location}
          professionalism:{doctor.professionalism}
        ))
        } */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
