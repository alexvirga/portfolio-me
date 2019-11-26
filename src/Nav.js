import React, {Component} from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class Nav extends Component {
    
  render() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
      <nav>
          <h1 style={{fontSize: "30px"}}> ALEX VIRGA </h1>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'><li>About Me</li></Link>
            <Link style={navStyle} to='/projects'><li>Projects</li></Link>
            <Link style={navStyle} to='/experience'><li>Experience</li></Link>
        </ul>
      </nav>
    )
  }
}




export default Nav