import React, { Component} from 'react';
import './App.css';
import './HomeC.js';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useLocation } from "react-router-dom";
import APItest from "./API_test";
import navbar from 'react-bootstrap/Navbar';
import nav from 'react-bootstrap/Nav';
import { AnimatePresence, motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faRocket, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery'; 
import interact from 'interactjs';
library.add(fab, faCheckSquare, faCoffee, faGithub,faRocket);



function App() {
  
  const location = useLocation();

  return (
    
    <>
      
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 bg-dark py-5"
          style={{ height: "100vh", zIndex: 1000 }}
        >
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className="nav-link text-white">
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <main
          className="col-6 col-sm-8 col-md-10 py-5"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
    </>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: 0,
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "absolute",
  'margin-top' : "80px"
};

function About() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>About</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
      <h2>Framer Motion</h2>
      <p>
        Framer Motion is a great library for animations in React easily and
        quickly.
      </p>
      <h2>React Router</h2>
      <p>One of the most well known routers in the React ecosystem.</p>
    </motion.div>
  );
}

interact('.tap-target')
  .on('tap', function (event) {
   // event.currentTarget.classList.toggle('switch-bg')
    event.currentTarget.classList.toggle('large')
   // event.currentTarget.classList.toggle('rotate')
    event.preventDefault()
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large')
    event.preventDefault()
  })
  .on('hold', function (event) {
    event.currentTarget.classList.toggle('rotate')
    event.currentTarget.classList.toggle('large')
  })

function Settings() {
  return (
    <motion.div
      style={pageStyle}
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="col-md-8">
        <h1>Settings</h1>
        <form>
          <fieldset>
            <legend>Details</legend>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Preferences</legend>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="large-labels"
                className="custom-control-input"
              />
              <label htmlFor="large-labels" className="custom-control-label">
                Use Larger Labels
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="email-opt-in"
                className="custom-control-input"
              />
              <label htmlFor="email-opt-in" className="custom-control-label">
                Receive Notifications by Email
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="hide-profile-pic"
                className="custom-control-input"
              />
              <label
                htmlFor="hide-profile-pic"
                className="custom-control-label"
              >
                Show Profile Image
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
}

function activateShow() {
  var x = document.getElementById("blipReact");
    document.getElementById('blipReact').className = "rotateAni tap-target";
    x.style.display = "flex";
  }


function Home() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="page">
            <div className="container">
                <h1 className="text-light" style={{fontSize: '70px'}}>Matthew Davies</h1>
                <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                    <button onClick={activateShow} className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Start Tour</button>
                    <a href="https://github.com/davies3matt" target="_blank" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faGithub} /> Visit My Github Profile<i className="fas fa-external-link-square-alt ml-2" /></a>
                </div>
            </div>  
          <div id="blipWrapper">
            <div id="blipReact" className="tap-target">
                  <h1>React</h1>
            </div> 
            <div id="blipAngular" className="tap-target">
                  <h1>Angular</h1>
            </div> 
            <div id="blipCsharp" className="tap-target">
                  <h1>C#</h1>
            </div>
            <div id="blipJava" className="tap-target">
                  <h1>java</h1>
            </div>
            <div id="blipPython" className="tap-target">
                  <h1>Python</h1>
            </div>
            <div id="blipCSS" className="tap-target">
                  <h1>CSS</h1>
            </div>
          </div>
        
        </div>
    </motion.div>
  );

  

  
}

export default App;
