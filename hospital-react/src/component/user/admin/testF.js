// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
// import { useState,useEffect } from 'react';
// import MaterialTable from 'material-table';

// const columns = [
//   {field: 'name', headerName: 'NAME'},
//   {field: 'email', headerName: 'EMAIL'},
//   {field: 'hospital_NAme', headerName: 'HOSPITAL_NAME'},
//   {field: 'location', headerName: 'LOCATION'},
//   {field: 'professionalism', headerName: 'PROFESSIONALISM'}
// ]
// export default function FlexLayoutGrid() {


//   const [doctors, setDoctors] = useState([]);

//   useEffect(()=>{
//     fetch("http://localhost:8080/doctor/getAll")
//     .then((data) => data.json())
//     .then((data) => setDoctors(data))
//     })
 
//   return (
//     <div style={{ height: 400, width: '100%' }}>
    
//           <MaterialTable
//           columns={columns}
//           />
      
//     </div>
//   );
// }





import React, {useState, useEffect} from 'react';
import {  Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './user.css';
import axios from 'axios';

// const columns = [
//     {field: 'name', headerName: 'NAME'},
//     {field: 'email', headerName: 'EMAIL'},
//     {field: 'hospital_NAme', headerName: 'HOSPITAL_NAME'},
//     {field: 'location', headerName: 'LOCATION'},
//     {field: 'professionalism', headerName: 'PROFESSIONALISM'}
//   ]

function Datasa(){
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/doctor/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setDoctors(result);
        }
        )
      },[])

      const deleteDoctor = (e, idDoctor) =>{
        e.preventDefault();
       
      }

      return(
         <div> 
    
           {/* <ul>
           {doctors.map(doctor =>(
             <li>
               Id:{doctor.id}<br/>
               Name:{doctor.name}<br/>
              hospital_NAme:{doctor.hospital_NAme}<br/>
              location:{doctor.location}<br/>
              professionalism:{doctor.professionalism}<br/>
              </li>
        ))
        }
        </ul> */}
         
        <div class="datatable"> 
        <h3>Manege Doctor.</h3>
        <h4>Click here to add New Doctor:<Button><AddCircleIcon/></Button></h4>
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
                      
            <Button><EditIcon/></Button>
            <Button 
            onclick={(e, idDoctor) =>
              deleteDoctor(e, doctor.idDoctor)
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

export default Datasa;