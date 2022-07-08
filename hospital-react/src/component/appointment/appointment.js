import './appointment.css';
import ModalAppointment from './modalAppointment';

function Appointment() {
  

    return(
         
      <div class="card" id="Card_appointment">
          

      <div class="card-body">
      <h5 class="card-header">Medical Appointment</h5>
        <p class="card-text">
        Make scheduling a doctor’s appointment with your medical practice as easy as possible.</p>
        <p>
         This doctor appointment form  is a simple way for both new patients and current patients to submit an appointment request.
          Whether you are a primary care physician or another type of healthcare provider,
           this request form offers both convenience and efficiency.          </p>
  
      <ModalAppointment/>
      </div>
    </div>
    
    );
  }
  
  export default  Appointment;
