import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import {GrHome} from 'react-icons/gr';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneX} from 'react-icons/bs';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
          <section>
               <Container>
                    <div className='footer'>
                    <div class="foot-copy">
                         <h6>&copy;TheZanzibarTaxi.com | designed by Mr_Password:waririzi65@gmail.com</h6>               
                    </div>
                    <hr/>
                    <br/>
                    <div className='row'>
                         <div className='col-md-4'>
                              Why Hospital Inform? <br/>
                              Powercomputer's Hospital Management Software is one of the holistic leading edge technology software, a 360° tool in a hospital organisation, which enables a paper less environment
                         </div>
                         <div className='col-md-4'>
                         </div>
                              <div className='col-md-4'>
                                   <BsTelephoneX/>+255778489968<br/>
                                   <GrHome/>Zanzibar Stone Town<br/>
                              </div>
                         <br/>
                    </div>    
                              
                   
                    </div>
                   
               </Container>
     </section>    
  );
}

export default Footer;