import React from "react";
import './navbar.css';
import {HiOutlineHome} from 'react-icons/hi';
import {FcAbout} from 'react-icons/fc';
import {MdContactMail} from 'react-icons/md';
import {SiVapor} from 'react-icons/si';


const MoveNav = () =>{
    return (
        <nav>
            <a href="#home"><HiOutlineHome /></a>
            <a href="#facility"><FcAbout /></a>
            <a href="#appointment"><SiVapor /></a>
            <a href="#contact"><MdContactMail /></a>

        </nav>
    )
}
export default MoveNav;