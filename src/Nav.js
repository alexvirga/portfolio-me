import React, {Component} from 'react';

import './App.css';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    
  render() {


    return (
      <div className="nav-container">
        <h1 className='nav-name'> ALEX VIRGA </h1>  
        <div className="nav-links">
            <NavLink className='nav-style' to='/about'><li style={{padding: "5px"}}>About Me</li></NavLink>
            <NavLink className='nav-style' to='/projects'><li style={{padding: "5px"}}>Projects</li></NavLink>
            <NavLink className='nav-style' to='/experience'><li style={{padding: "5px"}}>Experience</li></NavLink>
            </div> 
        <div className="socials">
        
        
<a className="icon-container" href="https://www.linkedin.com/in/alexander-virga-285174116/" target="blank">
<img className="icon" border="0"  src="iconfinder_Rounded_Linkedin2_svg_5282542.png" />
</a>

<a className="icon-container" href="https://github.com/alexvirga" target="blank">
<img className="icon" border="0"  src="iconfinder_mark-github_298822 (1).png" />
</a>


<a className="icon-container" href="https://medium.com/@alexander.virga" target="blank">
<img  className="icon" border="0"  src="iconfinder_Rounded_Medium3_svg_5282543.png"/>
</a>



        </div>
        

        
      
      </div>
    )
  }
}




export default Nav