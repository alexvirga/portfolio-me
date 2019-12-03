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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              height: "100%",
              justifyContent: "center",

            }}
          >
            <h1
              style={{
                fontFamily: "Circular-header",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {" "}
              MapHunt
            </h1>

            <div style={{display: "flex", justifyContent:"center"}}>
            <img
              src="maphunt.png"
              style={{
                display: "flex",
                width: "380px",
                justifyContent: "center"
              }}
            />
            </div>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <p
                style={{
                  paddingTop: "20px",
                  fontFamily: "Circular-p",
                  display: "flex",
                  width: "300px",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
                {" "}
                An interactive scavenger hunt game using Google Street View.
                Players look for given locations and landmarks by navigating
                through the Street View. Landmarks are automatically recognized
                by the game and marked as "found". Don't get lost!
              </p>
            </div>


            <div style={{display: "flex", justifyContent: "space-evenly", fontFamily: "Circular-links", fontSize: "20px", marginBottom: "20px", fontWeight: "bold"}}>
            <a href="https://github.com/alexvirga/maphuntfrontend" target="blank">Github</a>
            <a href="https://youtu.be/UgrWNtw6re4" target="blank">Demo</a>
            </div>

            
  

            {/* ------What I used----- */}
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}
              >
                {" "}
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
          </div>

          {/* --------Banter------- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px"
            }}
          >
            <h1
              style={{
                fontFamily: "Circular-header",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {" "}
              Banter
            </h1>

            <div style={{display: "flex", justifyContent:"center"}}>

            <img
              src="Banter.png"
              style={{ display: "flex", width: "300px", alignSelf: "center" }}
            />
            </div>



            <div
                           style={{
                            display: "flex",
                            height: "100%",
                            alignItems: "center",
                            flexDirection: "column"
                          }}
                        >
                          <p
                            style={{
                              paddingTop: "20px",
                              fontFamily: "Circular-p",
                              display: "flex",
                              width: "300px",
                              justifyContent: "center",
                              textAlign: "center"
                            }}
                          >
              
                {" "}
                Be in control of your part of the bill. Users join a party using
                a unique 5 digit code, and can adjust their share of the bill,
                including tip and tax, in real time.{" "}
              </p>
            </div>

            <div style={{display: "flex", justifyContent: "space-evenly", fontFamily: "Circular-links", fontSize: "20px", marginBottom: "20px", fontWeight: "bold"}}>
            <a href="https://github.com/alexvirga/Banter" target="blank">Github</a>
            <a href="https://youtu.be/Eu9lid6azYs" target="blank">Demo</a>
            </div>



            {/* ------What I used----- */}
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}
              >
                {" "}
                What I used
              </h2>
              <ul style={{ listStyle: "none" , textAlign: "center"}}>
                <li> React Native </li>
                <li> Ruby </li>
                <li> Rails </li>
                <li> Javascript </li>
                <li> HTML</li>
                <li> CSS</li>
              </ul>
            </div>
          </div>

          {/* --------Artwork------- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px"
            }}
          >
            <h1
              style={{
                fontFamily: "Circular-header",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {" "}
              Artwork
            </h1>

            <div style={{display: "flex", justifyContent:"center"}}>

            <img
              src="artwork.png"
              style={{ display: "flex", width: "380px", }}
            />
            </div>


            <div
              style={{
                display: "flex",
                
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <p
                style={{
                  paddingTop: "20px",
                  fontFamily: "Circular-p",
                  display: "flex",
                  width: "300px",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
              
                {" "}
                Bringing mural-needing businesses and money-needing artists
                together. ArtWork is a platform for businesses to find the
                perfect artist to paint the officespace mural of their corporate
                dreams. Artists sign up to be featured on the site for
                businesses to peruse through, and in return find themselves more
                clients for mural work.
              </p>
            </div>

            <div style={{display: "flex", justifyContent: "space-evenly", fontFamily: "Circular-links", fontSize: "20px", marginBottom: "20px", fontWeight: "bold"}}>
            <a href="https://github.com/KConlon13/ArtWorkFrontEnd" target="blank">Github</a>
            <a href="https://youtu.be/Eu9lid6azYs" target="blank">Demo</a>
            </div>

            {/* ------What I used----- */}
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
              <h2
                style={{
                  fontFamily: "Circular-header",
                  fontSize: "20px",
                  marginBotton: "0px"
                }}
              >
                {" "}
                What I used
              </h2>
              <ul style={{ listStyle: "none" , textAlign: "center"}}>
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
      </div>
    );
  }
}

export default Projects;
