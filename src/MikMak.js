import React, { Component } from "react";

import "./App.css";
import { useLocation } from "react-router-dom";

class MikMak extends Component {
  render() {
    return (
      <div className="content-page-mikmak">
        <div
          style={{
            height: "80px",
            boxShadow: "0 2px 2px rgba(0,0,0,.09)",
            display: "flex",
            justifyItems: "center",
            flexDirection: "row",
            
            backgroundColor: "white"
          }}
        >
          <div
            style={{
              height: "80px",
              width: "20%",
              display: "flex",
              justifyItems: "center",
              flexDirection: "row"
            }}
          >
            <img
              style={{
                display: "flex",
                marginLeft: "4%",
                paddingTop: "10px",
                height: "60px",
                
              }}
              src="mikmak-gradient-logo-2.b9228d23.png"
            />
            <div style={{display: "flex"}}>
            <div class="patent-badge">Application Pending</div>

            </div>
          </div>
        </div>

        <div className="mikmak-header-container">
          <h1 className="mikmak-header-title"> Why MikMak? </h1>
        </div>

        <div className="mikmak-body-container">
          <div className="mikmak-images">
            <img
              style={{ height: "70%", marginRight: "3px" }}
              src="./iconfinder_dev_1055073.png"
            />
            <img
              style={{ height: "70%", marginLeft: "3px" }}
              src="iconfinder_window_512536.png"
            />
          </div>
          <h1 className="mikmak-body-title"> Media meets Software</h1>

          <p className="mikmak-p">
            I didn't leave the advertising industry on the best note. Despite the incredible resources and experience I gained, working at the worlds largest ad agency had its limitations. With over $100 million in spend for my accounts alone, there were no dashboards or reporting tools to be found. Most of my time was spent generating reports by scratch in excel. 
            <br />
            <br />
            <p style={{fontWeight: "bold", fontSize: "20px"}}>This began my journey into software engineering and data analytics.</p>
           
            For months, I would arrive at the office at 7:45am, and take classes at night to learn data analytics. I began building dashboards in Tableau, writing custom SQL queries, and automating my reports in excel. After attempting to implement these skills and tangling myself in red-tape, I decided to leave and immerse myself in the world of software engineering. I began coding 12+ hours a day, and I loved every second of it. 
            <br />
            <br />
            <p style={{fontWeight: "bold", fontSize: "20px"}}>Now, I'm reaching out to MikMak with a purpose.</p> A quality product shouldn't only satisfy the client. A quality product provides value to the client, consumer, vendor, and everyone between. MikMak is just that. I became a software engineer to design the systems and platforms "old" me wished for. That is why I am reaching out to MikMak.
            <br />
            <br />
          
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
            paddingTop: "15px",
            marginBottom: "20px"
          }}
        >
          {" "}
          What's important
        </h1>

        <div className="mikmak-footer-container">


        <div style={{display: "flex", alignItems: "center", flex: "1"}}>
            <img
              style={{ height: "70px", marginLeft: "3px" }}
              src="iconfinder_rgb_1054993.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Inclusive</p>
            
            <p style={{fontFamily: "Circular-p"}}> Let's all get along</p>
            </div>
            </div>


            <div style={{display: "flex", alignItems: "center", flex: "1"}}>
          <img
              style={{ height: "70px", marginLeft: "3px", display: "flex" }}
              src="iconfinder_door_1055069.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Accessibility</p>
            
            <p style={{fontFamily: "Circular-p"}}> Made for everyone </p>
            </div>
            </div>


            <div style={{display: "flex", alignItems: "center", flex: "1"}}>
            <img
              style={{ height: "70px", marginLeft: "3px" }}
              src="iconfinder_ufo_1054946.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Different</p>
            
            <p style={{fontFamily: "Circular-p"}}> In a good way </p>
            </div>
            </div>

            <div style={{display: "flex", alignItems: "center", flex: "1"}}>
            <img
              style={{ height: "70px", marginLeft: "3px" }}
              src="iconfinder_bookshelf_1055107.png"
            />
            <div style={{display: "flex", flexDirection: "column", marginLeft: "3px"}}>
            <p style={{fontFamily: "Circular-p", fontWeight:"700", marginBottom: "1px"}}> Learn</p>
            
            <p style={{fontFamily: "Circular-p"}}> At work, at home, wherever</p>
            </div>
            </div>


          


          


        </div>
      </div>
    );
  }
}

export default MikMak;
