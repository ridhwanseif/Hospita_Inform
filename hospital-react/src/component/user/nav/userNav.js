import React,{useState} from 'react';
import '../../nav/navbar.css';
import {GiHospitalCross} from 'react-icons/gi';
import Modal from '../../nav/logIn/logIn';
import LogOut from './logOut';

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
                   
                   
                   <li>
                   
                    <LogOut/>
                    </li>
                        {/* <ButtonGroup>
                          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" className='btn btn-primary'
                            onClick={()=>{
                              setOpenModal(true);
                          }} 
                            >Profile</Dropdown.Item>
                            <Dropdown.Item eventKey="2" className='btn btn-primary'
                            >LogOut</Dropdown.Item>
                          </DropdownButton>
                        </ButtonGroup> */}
                 



                 
               </ul>
           </div>
       </div>
  );
}

export default Navbar;