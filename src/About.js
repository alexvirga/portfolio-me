import React, {Component} from 'react';

import './App.css';




class About extends Component {
  render() {
    return (
        
      <div className="about-page">

        <div className="about-header-container">

        {/*-------------Page Header-------------- */}
        <h1 className="about-page-content-header"> Full-stack developer | Web | iOS </h1>
        <p className="header-subtitle"> I enjoy making pretty web pages</p>
        </div>

       




        {/*-------------Introduction-------------- */}
  
        <div style={{display: "flex", flexDirection: "column", justifyItems: "center", backgroundColor: "#efefef", alignItems: "center"}}>
          <h1 className="about-page-body-header"> Let me introduce myself.
          </h1>
          <p className="about-page-p"> I'm relatively new to development. In May 2019, I left my job in marketing to immerse myself in code. Since then, I've developed games, finance applications, social media platforms, and much much more. Some would call it the "honeymoon phase", but I truly love what I do. I call it the "Waking up at 3am and watching udemy tutorials out of excitement for tomorrow" phase.  Am I digging myself into a hole? I'll stop. Here's a picture of me in a trendy circle. </p>
         


        {/*-------------Photo of me-------------- */}
        <div style={{width:"100%", display:"flex", justifyContent: "center", paddingBottom: "30px"}}>
          <img
              style={{ marginTop: "20px",height: "200px", width: "200px", borderRadius: "50%" }}
              src='./IMG_0650.png' />
        </div>
        </div>

        {/*-------------My Skills-------------- */}

        <h1 className="about-page-skills-header"> Here's what I'm good at.</h1>


      <div className="about-page-skills-container">


        <div>
        <h2 style={{fontFamily: "Circular-header", fontSize: "20px", marginBotton: "10px"}}> Front-end</h2>
        <ul style={{listStyle: "none", textAlign: "center"}}>
          <li> Javascript</li>
          <li> React.js</li>
          <li> React Native</li>
          <li> HTML</li>
          <li> CSS</li>
        </ul>
        </div>

        <div style={{display: "flex", justifyItems: "center", flexDirection: "column"}}>
        <h2 style={{fontFamily: "Circular-header", fontSize: "20px", marginBotton: "0px"}}> Back-end</h2>
        <ul style={{listStyle: "none",textAlign: "center"}}>
          <li> Ruby</li>
          <li> Rails</li>
          <li> SQL (Database)</li>
        </ul>
        </div>

        <div>
        <h2 style={{fontFamily: "Circular-header", fontSize: "20px", textAlign: "center", marginBotton: "0px"}}> Other</h2>
        <ul style={{listStyle: "none", textAlign: "center"}}>
          <li> Git </li>
          <li> Heroku </li>
          <li> Logic Pro </li>
          <li> Bootstrap </li>
        </ul>
        </div>






      

        </div>





      </div>
  
    )
  }
}

export default About