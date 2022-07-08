import React from 'react';
import UserNav from './component/user/nav/userNav';
import './css/index.css';
import './App.css';

import User from './component/user/admin/user';
import UserFooter from './component/user/userFooter/userFooter';


function UserInterface(){
  return(
    <div>
      <UserNav />
      <User/>
      <UserFooter/>
    </div>
   
  );
 
}

export default UserInterface;
