import React,{useState} from 'react';
import '../../nav/navbar.css';
import {GiHospitalCross} from 'react-icons/gi';
import Modal from '../../nav/logIn/logIn';
import {ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im';
import {FaTelegramPlane} from 'react-icons/fa';

function UserFooter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div class="banner">
           <div class="navbar" id="navb">
           {openModal && <Modal closeModal={setOpenModal} />}

              <ul>
               <h4><span className='logo'><GiHospitalCross /></span></h4>
              </ul>
           
               <ul>
                   
                   <li><a href='https://facebook.com' target='_blank'><BsFacebook /></a></li>
                   <li> <a href='https://whatsApp.com' target='_blank'><ImWhatsapp /></a></li>
                   <li><a href='https://telegram.com' target='_blank'><FaTelegramPlane /></a></li>
                   <li><a href='https://instagram.com' target='_blank'><BsInstagram /></a></li>
               </ul>
           </div>
       </div>
  );
}

export default UserFooter;