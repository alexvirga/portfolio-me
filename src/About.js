import React, {Component} from 'react';

import './App.css';




class About extends Component {
  render() {
    return (
        
      <div className="about-page">

        <div className="about-header-container">

        <h1 className="about-page-content-header"> Full-stack developer | Web | iOS </h1>
        <p className="header-subtitle"> I enjoy making pretty web pages</p>
        </div>

        <div style={{display: "flex", flexDirection: "column", justifyItems: "center"}}>
          <h1 className="about-page-body-header"> Let me introduce myself.
          </h1>
          <p className="about-page-p"> I'm relatively new to development. In May 2019, I left my job to immersive myself in code. Since then, I've developed games, finance applications, social media platforms, and much much more. Some would call it the "honeymoon phase", but I truly love what I do. I call it the "Waking up at 3am and watching udemy tutorials out of excitement for tomorrow" phase.  Am I digging myself into a hole? I'll stop. Here's a picture of me in a trendy circle. </p>
        <div style={{width:"100%", display:"flex", justifyContent: "center"}}>
          <img
              style={{ marginTop: "20px",height: "200px", width: "200px", borderRadius: "50%" }}
              src="IMG_0650.png"/>

        </div>

        </div>





      </div>
  
    )
  }
}

export default About