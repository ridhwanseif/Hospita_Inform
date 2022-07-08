/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './css/index.css';
import Doctor from './imegs/doctor//w1.jpg';
import Modal from './component/modals/modal';
import Carousel from './component/carousel/carousel';
import Social from './component/social';

function Home() {
    const [openModal, setOpenModal] = useState(false);

  return (
      
   <div>
       
              {openModal && <Modal closeModal={setOpenModal} />}

        <section class="header" id='home'>
        <Carousel />

           <div class="container">
           <div className='row'>
            <div className='col-md-12'>
                <div className='ditriptiion'>
                    <h2>Why Hospital Inform System</h2>
                    <p>Technological advancement has brought evolution in every sector, making the management process speedy and seamless, serving more people worldwide. The healthcare sector is no exception. The arena of healthcare informatics, combined with healthcare data, information technology, and business, has gained a huge boost from technology. Health Information System (HIS) is such a technological boon for the health industry, helping the management of healthcare data with utter efficiency. The implementation of this system helps in improving the quality of patient care, reducing operational cost, making administration data error-free and shaping the entire internal management process more organized. </p>
                </div>
               
            </div>
           </div>
        <div class='row'>
             <div class='col-md-5'>
                 <div className='col-doctor'>
                    <div className='doctor'>
                     <div className='img-doctor'>
                         <img src={Doctor} alt="doctor"/>
                     </div>
                    </div>
                 </div>
            </div>
            <div class='col-md-7'>
                <div class="content">
                    <h1><span>stay</span> safe, <span>stay</span>  healthy.</h1>
                    <h2>Find The Niearest Hospital .</h2>
                    <h3>caring for your life.</h3>
                   
                    <Modal/>
                </div>
            </div>
      
           </div>
           </div>
           <a href='#contact' className='scroll_down'>scroll_down</a>
       </section>
   </div>
  );
}



export default Home;
