import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { getDoctor } from '../../service/api';
import {useNavigate,useParams} from 'react-router-dom'



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

  const [doctors,setDoctor] = useState([]);

  


  useEffect(()=>{
   setName(localStorage.getItem(name))
   setEmail(localStorage.getItem(email))
   setLocation(localStorage.getItem(location))
   setProfessionalism(localStorage.getItem(professionalism))
   sethospital_NAme(localStorage.getItem(hospital_NAme))
   
  },[])

  const EditDoctor = () =>{
    // const [doctor, setDoctor] = useState();
    const {id} = useParams();
    
    useEffect(() => {
        getDoctorData();
    }, [])
    const getDoctorData = async () => {
        let response = await getDoctor(id);
        console.log(response);
    }
  }
  return (
    <div>
      <Button variant="outlined" class="btn btn-primary" onClick={handleClickOpen}>
      <EditIcon/>
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
          <Button onClick={EditDoctor}>Edit</Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
