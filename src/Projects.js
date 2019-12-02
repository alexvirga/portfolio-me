import React, {Component} from 'react';

import './App.css';


class Projects extends Component {
  render() {
    return (
  
      <div className="projects-page">

        <div className="projects-header-container">

        
{/*-------------Computer img-------------- */}        <div style={{width:"100%", display:"flex", justifyContent: "center", paddingBottom: "30px"}}>
          <img
              style={{ marginTop: "20px",height: "200px", width: "300px", borderRadius: "50%" }}
              src='./transparentimg.png' />
        </div>

{/*-------------Page Header-------------- */}
        <h1 className="projects-page-content-header"> Here's what I've been up to. </h1>
        <p className="projects-header-subtitle"> Currently under construction</p>
        </div>

{/*-------------Project polfolio-------------- */}
        <div className="projects-show-container">

  <div>
    <h1> Banter</h1>
  <img src="Banter.png" style={{display: "flex", width: "200px"}}/>
</div>


<div>
  <h1> MapHunt</h1>
  <img src="maphunt.png" style={{display: "flex", width: "400px"}}/>
</div>



<div>
  <h1> Artwork</h1>
  <img src="artwork.png" style={{display: "flex", width: "400px"}}/>
</div>





        </div>




        </div>
     
    )
  }
}

export default Projects