import React,{useState} from 'react';
import './navbar.css';
import {GiHospitalCross} from 'react-icons/gi';
import Modal from './logIn/logIn';
import LogIn from './logIn/logIn';

// import {Link} from 'react-router-dom';
function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div class="banner">
           <div class="navbar" id="navb">
           {openModal && <Modal closeModal={setOpenModal} />}

              <ul>
              {/* <li><img src="assets/imegs/zanzibar/logo.png" class="logo" alt="logo Error"></li> */}
               <h4><span className='logo'><GiHospitalCross /></span> <span> H</span>ospital <span>i</span>nform.</h4>
              </ul>
           
               <ul>
                   <a href='#home'><li>home</li></a>
                   <a href='#facility'><li>about</li></a>
                   <a href='#Card_appointment'><li>appointment</li></a>
                   <a href='#contact'><li>contact us</li></a>
                   <li>
                    <LogIn/>
                    </li>

                      

                   {/* <Link to='/home'><li>home</li></Link>
                   <Link to='/tours'><li>facility</li></Link>
                   <Link to='/destination'><li>apointment</li></Link>
                   <Link to='/contact'><li>contact us</li></Link> */}
               </ul>
           </div>
       </div>
  );
}

export default Navbar;