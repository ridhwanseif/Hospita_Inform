import React from 'react';
import Nav from './component/nav/navbar';
import Home from './home';
import './css/index.css';
import './App.css';

import Footer from './component/footer/footer';
import MoveNav from './component/nav/moveNav';
import Facility from './component/facility/facility';
import Contact from './component/contact/contacts';
import Social from './component/social';
import Appointment from './component/appointment/appointment';
import About from './component/about/about';


function Main(){
  return(
      <div>
         <Nav />
      <Home />
      <Facility />
      <MoveNav />
      <Appointment/>
      <Contact />
      <About/>
      <Footer />
      <Social />
      </div>
  );
}

export default Main;
