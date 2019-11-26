import React, { useContext } from "react";

import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import {useTransition, animated, interpolate, useSpring} from 'react-spring';

import { Route, Switch, __RouterContext, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    
    from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(150%,0,0)'},
    
  })
  
  return (
    
    <div className="app-align">
   <Nav />
  <div className="content">
  {transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props} className="animated-div">
      <Switch location={location}>
        <Route exact path="/"  component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
      </Switch>
    </animated.div>
    
  ))}
    </div>
    </div>

  )
}

  





  
  const Home = () => (
    <div>
      <h1> Home Page</h1>
    </div>
  )




