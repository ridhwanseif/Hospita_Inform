import React, {useState, useEffect} from 'react';
import {  Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddHospital from './addHospital';
import axios from 'axios';

function AllHospital(){
    const [hospitals, setHospitals] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/hospital/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setHospitals(result);
        }
        )
      },[])

      const deleteHospital = (e, idHospital) =>{
        e.preventDefault();
       
      }

      return(
         <div>
        
        <div class="datatable"> 
        <h3>Manege Hospital.</h3>
        <div className='row'>
          <div className='col-md-5'>
          <h4>Click here to add New Hospital:</h4>
          </div>
          <div className='col-md-1'>
          <h4><AddHospital/></h4>
          </div>
        </div>
        <hr/>
    <div className='flex shadow border-b'>
    <table  class="table table-hover">
      
    <thead className='flex shadow border-b bg-gay-50'>      
      <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>LOCATION</th>
          <th>STATUS</th>
          <th>REGIN</th>
          <th>ACTION</th>
      </tr>
     
    </thead>
    <tbody>
     
      {hospitals.map(hospital =>(
        <tr key={hospital.idHospital}>
        <td>{hospital.name}</td>
        <td>{hospital.email}</td>
        <td>{hospital.location}</td>
        <td>{hospital.status}</td>
        <td>{hospital.regin}</td>
        <td>  
                      
            <Button><EditIcon/></Button>
            <Button 
            onclick={(e, idHospital) =>
              deleteHospital(e, hospital.idHospital)
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

export default AllHospital;