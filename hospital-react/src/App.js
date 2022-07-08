import React from 'react';
import './css/index.css';
import './App.css';
import UserInterface from './userInterface';
import Main from './mainInterface';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <div>


      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Main}/>
          <Route exact path="/mainInterface" component={Main}/>
          <Route  exact path="/userInterface" component={UserInterface}/>
           
        </Switch>
    
      </BrowserRouter> 
    </div>
 
  );
}


export default App;
