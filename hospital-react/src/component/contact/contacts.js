import React, { useRef } from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import {FaTelegramPlane} from 'react-icons/fa';
import {GiHospitalCross} from 'react-icons/gi';
import {BsFacebook} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im';

import Logo from "./logo.png";


const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_92paflx', 'template_pkc9vii', form.current, '8RlWS9W8Hkw5XHjAD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <section className="contact" id="contact">
           <div className="container">
           {/* <img className="logo" src={Logo} alt="First slide"/> */}
           <h4 className="h4-contact"><span className='logo'><GiHospitalCross /></span>  Hospital Inform Contact.</h4>
        <div className="row">
            <div className="col-md-4">
            <div className="contact_pos">
                <article className="contact_op">
                    <FaTelegramPlane />
                    <h5>Email</h5>
                    <h6>waririzi65@gmail.com</h6>
                    <a href="mailto:waririzi65@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact_op">
                    <BsFacebook />
                    <h5>Messenger</h5>
                    <h6>RidhwanSeif</h6>
                    <a href="https://m.me/" target="_blank">Send a message</a>
                </article>
                <article className="contact_op">
                    <ImWhatsapp />
                    <h5>WhatsApp</h5>
                    <h6>Mr Password</h6>
                    <a href="https://api.whatsapp.com/send?phone+255778489968" target="_blank">WhatsApp me</a>
                </article>
            </div>
            </div>

            <div className="col-md-8">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className="button">send Message</button>

            </form>
            </div>
           
        </div>
           </div>
            
        </section>
    );
}
export default Contact;