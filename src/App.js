import React, { Component } from "react";

import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          
          </Switch>
        </div>
      </Router>
    );

  }

  const Home = () => (
    <div>
      <h1> Home Page</h1>
    </div>
  )



export default App;
