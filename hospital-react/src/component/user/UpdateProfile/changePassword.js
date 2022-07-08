import React from 'react';
import './updateProfile.css'; 

// import {Link} from 'react-router-dom';
function ChangePassword() {
  
  return (
    <div>
    <div className="container-xl px-1 mt-1">

    <hr className="mt-0 mb-1"/>
    <div className="row">
        <div className="col-xl-12">
           
            <div className="card mb-2">
            <div className="card-header">Change Password</div>

                <div className='card-body'>
        
                    <form>
                    <div className="row ">
                     
                     <div className="col-md-4">
                         <label className="small mb-1" for="inputFirstName">OLd Password</label>
                         <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                     </div>
                     
                     <div className="col-md-4">
                         <label className="small mb-1" for="inputLastName">New Password</label>
                         <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                     </div>

                     <div className="col-md-4">
                               <label className="small mb-1" for="inputOrgName">Commferm Password</label>
                               <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
                    </div>
                    </div>

                       
                           
                           
                           
                        

                        <button className="btn btn-primary" type="button">Save changes</button>

                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
          </div>
  );
}

export default ChangePassword;