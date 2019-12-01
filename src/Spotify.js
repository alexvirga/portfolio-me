import React, {Component} from 'react';

import './App.css';
import {useLocation } from "react-router-dom";



class Spotify extends Component {


  
  render() {


    return (
        
      <div className="content-page-spotify">
        <div style={{height: "80px", backgroundColor: "black", display: "flex", justifyItems: "center"}}>

          <div style={{height: "80px", width: "20%", display: "flex:", justifyItems: "center"}}>
        <img style={{marginLeft: "4%", paddingTop: "10px", height: "60px", width: "140px"}} src="kisspng-logo-spotify-issuu-soundcloud-spotify-logo-5b2a6589937ea5.8739811215295051616042.png"
            />
           

          </div>
        </div>
        <div className="spotify-header-container">
        <h1 className="spotify-header-title"> Why Spotify? </h1>
        </div>

        <div className="spotify-body-container"> 
        <h1 className="spotify-body-title"> Software meets Audio</h1>
        <p className="spotify-p">
        My path to becoming a software engineer was a bit unusual. From a young age, I began experimenting with audio engineering. As I continued my education, audio synthesis and production were my creative outlets that helped me balance my aptitude for math, analytics and business with my love for creating. It was a textbook struggle between left-brain / right-brain. I wasn’t satisfied with just one side. After moving into the professional world, that balance was thrown off. I was left searching for that creative, yet analytical part of my life again. I missed waking up and counting down the minutes until I could get back to work.

Through Flatiron, becoming a developer has given me the tools to succeed not only in my professional life, but my personal life as well. My passion has become my profession, and I couldn’t be happier. 

        </p>
        </div>
      </div>
  
    )
  }
}

export default Spotify