import React, { Component } from "react";

import "./App.css";
import { useLocation } from "react-router-dom";

class Spotify extends Component {
  render() {
    return (
      <div className="content-page-spotify">
        <div
          style={{
            height: "80px",
            backgroundColor: "black",
            display: "flex",
            justifyItems: "center"
          }}
        >
          <div
            style={{
              height: "80px",
              width: "20%",
              display: "flex:",
              justifyItems: "center"
            }}
          >
            <img
              style={{
                marginLeft: "4%",
                paddingTop: "10px",
                height: "60px",
                width: "140px"
              }}
              src="kisspng-logo-spotify-issuu-soundcloud-spotify-logo-5b2a6589937ea5.8739811215295051616042.png"
            />
          </div>
        </div>

        <div className="spotify-header-container">
          <h1 className="spotify-header-title"> Why Spotify? </h1>
        </div>

        <div className="spotify-body-container">
          <div className="spotify-images">
            <img
              style={{ height: "70%", marginRight: "3px" }}
              src="./iconfinder_dev_1055073.png"
            />
            <img
              style={{ height: "70%", marginLeft: "3px" }}
              src="./iconfinder_volume_1054938.png"
            />
          </div>
          <h1 className="spotify-body-title"> Software meets Audio</h1>

          <p className="spotify-p">
            My path to becoming a software engineer was a bit unusual. From a
            young age, I began experimenting with audio engineering. As I
            continued my education, audio synthesis and production were my
            creative outlets that helped me balance my aptitude for math,
            analytics and business with my love for creating. It was a textbook
            struggle between left-brain / right-brain. I wasn’t satisfied with
            just one side.
            <br />
            <br />
            After moving into the professional world, that balance was thrown
            off. I was left searching for that creative, yet analytical part of
            my life again. I missed waking up and counting down the minutes
            until I could get back to work. I quit my job and began coding 16+ hours a day... I loved every second of it. Becoming a developer has given me
            the tools to succeed not only in my professional life, but my
            personal life as well.
            <br />
            <br />
            <h3 style={{ fontFamily: "Circular-header", marginBottom: "20px" }}>
              My passion has become my profession, and I couldn’t be happier.
            </h3>
          </p>
        </div>




        <h1
          style={{
            fontFamily: "Circular-links",
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "9px",
            marginBottom: "20px"
          }}
        >
          {" "}
          What's important
        </h1>

        <div className="spotify-images-footer">



            <img
              style={{ height: "80%", marginLeft: "3px" }}
              src="iconfinder_rgb_1054993.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Inclusive</p>
            
            <p style={{fontFamily: "Circular-p"}}> Let's all get along</p>
            </div>
     


      
          <img
              style={{ height: "80%", marginLeft: "3px" }}
              src="iconfinder_door_1055069.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Accessibility</p>
            
            <p style={{fontFamily: "Circular-p"}}> Made for everyone </p>
            </div>




            <img
              style={{ height: "80%", marginLeft: "3px" }}
              src="iconfinder_ufo_1054946.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Different</p>
            
            <p style={{fontFamily: "Circular-p"}}> In a good way </p>
            </div>



            <img
              style={{ height: "80%", marginLeft: "3px" }}
              src="iconfinder_bookshelf_1055107.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Learn</p>
            
            <p style={{fontFamily: "Circular-p"}}> At work, at home, wherever</p>
            </div>



          


          


        </div>
      </div>
    );
  }
}

export default Spotify;
