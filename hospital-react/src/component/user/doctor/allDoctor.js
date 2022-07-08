import React, {useState, useEffect} from 'react';
import {  Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddDoctor from './AddDoctor';
import EditDoctor from './EditDoctor';
import axios from 'axios';

function AllDoctor(){
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/doctor/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setDoctors(result);
        }
        )
      },[])

      const deleteDoctor = (idDoctor) =>{
        axios.delete("http://localhost:8080/doctor/delete/{idDoctor}")
       .then(() => {
        AllDoctor();
       })
      }

      const editDoctor = (idDoctor) =>{
        console.log(idDoctor);
        localStorage.setItem('idDoctor',idDoctor)
      }
      return(
         <div>
        
        <div class="datatable"> 
        <h3>Manege Doctor.</h3>
        <div className='row'>
          <div className='col-md-5'>
          <h4>Click here to add New Doctor:</h4>
          </div>
          <div className='col-md-2'>
          <h4><AddDoctor/></h4>
          </div>
        </div>
        <hr/>
    <div className='flex shadow border-b'>
    <table  class="table table-hover">
      
    <thead className='flex shadow border-b bg-gay-50'>      
      <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>HOSPITAL_NAME</th>
          <th>LOCATION</th>
          <th>PROFESSIONALISM</th>
          <th>ACTION</th>
      </tr>
     
    </thead>
    <tbody>
     
      {doctors.map(doctor =>(
        <tr key={doctor.idDoctor}>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.hospital_NAme}</td>
        <td>{doctor.location}</td>
        <td>{doctor.professionalism}</td>
        <td>  
                      
            <Button
            onclick={() =>
              editDoctor(doctor.idDoctor)
             }><EditDoctor/></Button>
            <Button 
            onclick={() =>
              deleteDoctor(doctor.idDoctor)
             }><DeleteForeverIcon/>
             </Button>
        </td>
        </tr>

        ))
         }
    </tbody>
  </table>
  </div>
</div>

        </div>
      )
      
}

export default AllDoctor;