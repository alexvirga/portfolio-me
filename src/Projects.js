import React, { Component } from "react";

import "./App.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-page">
        <div className="projects-header-container">
          {/*-------------Computer img-------------- */}{" "}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "30px"
            }}
          >
            <img
              style={{
                marginTop: "20px",
                height: "200px",
                width: "300px",
                borderRadius: "50%"
              }}
              src="./transparentimg.png"
            />
          </div>
          {/*-------------Page Header-------------- */}
          <h1 className="projects-page-content-header">
            {" "}
            Here's what I've been up to.{" "}
          </h1>
          <p className="projects-header-subtitle">
            {" "}
            Currently under construction
          </p>
        </div>

        {/*-------------Project polfolio-------------- */}
        <div className="projects-show-container">
          {/* --------Maphunt------- */}
          <div className="project-card">
          <h1 className="project-card-header">
              MapHunt
            </h1>

      
              <img
                src="maphunt.png"
                className="project-img"
              />
            

            <p className="project-demo-p">
                An interactive scavenger hunt game using Google Street View.
                Players look for given locations and landmarks by navigating
                through the Street View. Landmarks are automatically recognized
                by the game and marked as "found". Don't get lost!
              </p>
          

            <div className="projects-demo-links">
              <a
                href="https://github.com/alexvirga/maphuntfrontend"
                target="blank"
              >
                Github
              </a>
              <a href="https://youtu.be/UgrWNtw6re4" target="blank">
                Demo
              </a>
            </div>

            {/* ------What I used----- */}

              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}
              >
                What I used
              </h2>
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                <li> Javascript </li>
                <li> Ruby </li>
                <li> Rails </li>
                <li> HTML</li>
                <li> CSS</li>
              </ul>
          
          </div>

          {/* --------Banter------- */}
          <div className="project-card">

            <h1 className="project-card-header">
              Banter
            </h1>
              <img src="Banter.png" className="project-img"/>
    

        <p className="project-demo-p">
                Be in control of your part of the bill. Users join a party using
                a unique 5 digit code, and can adjust their share of the bill,
                including tip and tax, in real time.
              </p>
           

              <div className="projects-demo-links">
              <a href="https://github.com/alexvirga/Banter" target="blank">
                Github
              </a>
              <a href="https://youtu.be/Eu9lid6azYs" target="blank">
                Demo
              </a>
            </div>

            {/* ------What I used----- */}

              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}>
                What I used
              </h2>
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                <li> React Native </li>
                <li> Ruby </li>
                <li> Rails </li>
                <li> Javascript </li>
                <li> HTML</li>
                <li> CSS</li>
              </ul>
            
          </div>

          {/* --------Artwork------- */}
          <div className="project-card">

          <h1 className="project-card-header">
              Artwork
            </h1>

              <img
                src="artwork.png"
                className="project-img"
              />


              <p className="project-demo-p">
                {" "}
                Bringing mural-needing businesses and money-needing artists
                together. ArtWork is a platform for businesses to find the
                perfect artist to paint the officespace mural of their corporate
                dreams. Artists sign up to be featured on the site for
                businesses to peruse through, and in return find themselves more
                clients for mural work.
              </p>
         

              <div className="projects-demo-links">

              <a
                href="https://github.com/KConlon13/ArtWorkFrontEnd"
                target="blank">
                Github </a>

              <a href="https://www.youtube.com/watch?v=q88y9Z08x10" target="blank">
                Demo
              </a>
            </div>

            {/* ------What I used----- */}

              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}
              >
               
                What I used
              </h2>
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                <li> React.js </li>
                <li> Javascript </li>
                <li> Ruby </li>
                <li> Rails </li>
                <li> HTML</li>
                <li> CSS</li>
              </ul>
            </div>
        </div>


      </div>
    );
  }
}

export default Projects;
