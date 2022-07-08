import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import React from "react"

import {Link}  from "react-router-dom";

const styledTable = styled(Table)`
      width: 90%;
    

`
const Thead = styled(TableRow)`

        background: blue;
        & > th {
            color: #fff;
          
        }

`
const TBody = styled(TableRow)`

        background: #fff;
        & > td {
           
        }

`

const AllFishers = () => {

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     getUsersDetails();

    // }, [])

    // const getUsersDetails = async () => {
    //     let response = await getUsers();
    //     console.log(response);
    //     setUsers(response.data);    
    // }

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getUsersDetails();

    // }
    

    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/doctor/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setDoctors(result);
        }
        )
      },[])

    return (

  
        <styledTable>
            <TableHead>
                <Thead>
                    <TableCell>NAME</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell>HOSPITAL_NAME</TableCell>
                    <TableCell>LOCATION</TableCell>
                    <TableCell>PROFESSIONALISM</TableCell>
                
                </Thead>

            </TableHead>
            <TableBody>
                {
                   doctors.map(doctor =>(
                        <TBody>
                            <TableCell>{doctor.name}</TableCell>
                            <TableCell>{doctor.email}</TableCell>
                            <TableCell>{doctor.hospital_NAme}</TableCell>
                            <TableCell>{doctor.location}</TableCell>
                            <TableCell>{doctor.professionalism}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:"10px"}} componenent={Link} to={`/edit/${doctor.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }

            </TableBody>
        </styledTable>
    )
}

export default AllFishers;