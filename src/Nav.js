import React, { Component } from "react";

import "./App.css";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  backgroundChange = () => {
    let currentLocation = window.location.href
      .toString()
      .split("/")
      .pop();
    if (currentLocation === "MikMak") {
      return "nav-container-mikmak";
    } else return "nav-container";
  };

  textChange = () => {
    if (this.backgroundChange() === "nav-container-mikmak") {
      return "nav-style-mikmak";
    } else return "nav-style";
  };

  nameChange = () => {
    if (this.backgroundChange() === "nav-container-mikmak") {
      return "nav-name-mikmak";
    } else return "nav-name";
  };




  

  render() {

    return (
      <div className={this.backgroundChange()}>
        <h1 className={this.nameChange()}> ALEX VIRGA </h1>
        <div className="nav-links">
          <Link className={this.textChange()} to="/about">
            <li style={{ padding: "5px" }}>About Me</li>
          </Link>
          <Link className={this.textChange()} to="/projects">
            <li style={{ padding: "5px" }}>Projects</li>
          </Link>
          {/* <NavLink className={this.textChange()} to="/experience">
            <li style={{ padding: "5px" }}>Experience</li>
          </NavLink> */}
          {/* <Link className={this.textChange()} to="/MikMak">
            <li style={{ padding: "5px" }}>MikMak</li>
          </Link> */}
        </div>
        <div className="socials">
          <a
            className="icon-container"
            href="https://www.linkedin.com/in/alexander-virga-285174116/"
            target="blank"
          >
            <img
              className="icon"
              border="0"
              src="iconfinder_Rounded_Linkedin2_svg_5282542.png"
            />
          </a>

          <a
            className="icon-container"
            href="https://github.com/alexvirga"
            target="blank"
          >
            <img
              className="icon"
              border="0"
              src="iconfinder_mark-github_298822 (1).png"
            />
          </a>

          <a
            className="icon-container"
            href="https://medium.com/@alexander.virga"
            target="blank"
          >
            <img
              className="icon"
              border="0"
              src="iconfinder_Rounded_Medium3_svg_5282543.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
