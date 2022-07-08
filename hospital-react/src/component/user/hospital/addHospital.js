import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function Hospital() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [hospitals, setHospitals] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [regin, setRegin] = useState('');

  const reset=(e)=>{
    e.preventDefault();
    setHospitals({
      name: "",
      email: "",
      location: "",
      status: "",
      regin: ""
    })
    
  }

  // const [hospitals,sethospital] = useState([]);

  const handleAdd=(e)=>{
    e.preventDefault()
    const hospital={name,email,regin,location,status}
    console.log(hospital)
    fetch("http://localhost:8080/hospital/add",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(hospital)

    }).then(()=>{
      console.log("New hospital added")
    })
  }

  // useEffect(()=>{
  //   fetch("http://localhost:8080/hospital/getAll")
  //   .then(res=>res.json())
  //   .then((result)=>{
  //     sethospital(result);
  //   }
  //   )
  // },[])

  return (
    <div>
      <Button variant="outlined" class="btn btn-primary" onClick={handleClickOpen}>
      <AddCircleIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New hospital</DialogTitle>
      
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            label="Hospital Name"
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
           
                  <FormControl  fullWidth margin="dense">
                          <InputLabel variant="standard" htmlFor="uncontrolled-native">
                              Regin
                          </InputLabel>
                          <NativeSelect
                              autoFocus
                              variant="standard"
                              fullWidth
                              onChange={(e)=>setRegin(e.target.value)}
                              defaultValue={1}
                              inputProps={{
                              name: 'Regn',
                              id: 'regn',
                          }}
                      >
                        <option value={"Mjini"}>Mjini</option>
                        <option value={"Mjini maharibi A"}>Mjini maharibi A</option>
                        <option value={"Mjini maharibi B"}>Mjini maharibi B</option>
                        <option value={"Kusini unguja"}>Kusini unguja</option>
                        <option value={"Wilaya ya kati"}>Wilaya ya kati</option>
                        <option value={"Kasikazini A"}>Kasikazini A</option>
                        <option value={"Kasikazini B"}>Kasikazini B</option>
                        <option value={"Mkoani"}>Mkoani</option>
                        <option value={"Chakechake"}>Chakechake</option>
                        <option value={"Mcheweni"}>Mcheweni</option>
                        <option value={"Wete"}>Wete</option>
                     
                </NativeSelect>
                </FormControl>

                
              
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
    

                <FormControl  fullWidth margin="dense">
                          <InputLabel variant="standard" htmlFor="uncontrolled-native">
                              Status
                          </InputLabel>
                          <NativeSelect
                              autoFocus
                              variant="standard"
                              fullWidth
                              onChange={(e)=>setStatus(e.target.value)}
                              defaultValue={1}
                              inputProps={{
                              name: 'status',
                              id: 'status',
                          }}
                      >
                      <option value={"Government"}>Government</option>
                      <option value={"praivet"}>praivet</option>
                </NativeSelect>
                </FormControl>
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
