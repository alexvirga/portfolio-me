import React, {Component} from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

class Nav extends Component {
    
  render() {


    return (
      <div className="nav-container">
        <h1 className='nav-name'> ALEX VIRGA </h1>  
        <ul className="nav-links">
            <NavLink className='nav-style' to='/about'><li style={{padding: "5px"}}>About Me</li></NavLink>
            <NavLink className='nav-style' to='/projects'><li style={{padding: "5px"}}>Projects</li></NavLink>
            <NavLink className='nav-style' to='/experience'><li style={{padding: "5px"}}>Experience</li></NavLink>
        </ul>
        

        
      
      </div>
    )
  }
}




export default Nav