import React from 'react';
import '../App.css';
import UserProvider from '../UserProvider';
import Modals from "./Modals"; 
import LoginReqs from './LoginReqs'; //import Modals from "./Modals"; //<LoginReqs/>
 
class Splash extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div id="logo"></div>
        <div id="splashBody">
        
        <div id="navItems"  style={navItemX}>
          <ul>
              <li className="navlist">Signup</li>
              <li className="navlist">About</li>
              <li className="navlist">Help</li>

          </ul>
        </div> 

        <div id="centerText"><h1>Remember everything you learn <br/><span id="emphasis">From now on!</span></h1></div>
          <div syle={modalPositioning}> <Modals/> </div>
        <UserProvider/>
        </div>  
      </React.Fragment>
);
  }
}

export default Splash;



const navItemX={
display : 'none',
}


const modalPositioning={
}