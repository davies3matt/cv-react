import React, { useRef, useLayoutEffect} from 'react';
import './App.css';
import DivScroll from './DivScroll.js';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useLocation } from "react-router-dom";
import APItest from "./API_test";
import { AnimatePresence, motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faRocket, faPallet, faBook, faPalette, faFistRaised, faClipboardList,faComments,faClock, faBinoculars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery'; 
import interact from 'interactjs';
library.add(fab, faCheckSquare, faCoffee, faGithub,faRocket,faBook, faPallet, faFistRaised, faClipboardList,faComments, faClock);


$(function () {
  $(window).on('scroll', function () {
    console.log('Scrolled!');
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
          console.log($(window).scrollTop());
      } else {
          $('.navbar').removeClass('active');
          
      }
  });
});

function App() {

  const location = useLocation();

  function changeNav() {
    if(window.pageYOffset > 0)
    $('.navbar').addClass('active');
    console.log(window.pageYOffset);
  }
  
  return (
    
    <>
    <div className="container-fluid bg-light" style={{display: 'inline-block',width: '100%', height: "100vh" }}>
          <nav className="navbar navbar-expand-lg fixed-top py-3" style={{display: 'inline-block', width: '100%'}}>
            <div className="nav-container center">
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav center">
                  <li className="nav-item"><NavLink to = "/" className="nav-link text-uppercase font-weight-bold">Home<span className="sr-only">(current)</span></NavLink></li>
                  <li className="nav-item "><NavLink to ="/about" className="nav-link text-uppercase font-weight-bold">About</NavLink></li>
                  <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                  <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row gradient-bg" style={{ height: "290vh" }} onScroll={changeNav}>
        <main
          className="col-md-12"
          style={{width:'100%', display: 'inline-block', position: "relative" }}
        >
          <div className="spacer"></div>
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={NewAbout} />
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
  width : "100%",
  display : 'inline-block'
};

function NewAbout() {
  const progressAngular = 40;
  const progressReact = 50;
  const progressHtml = 70;
  const progressCss = 60;
  const progressJavas = 65;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      >
      <div className="container-fluid">
        <div className="container">
          <div className="row">
           <div className="col-md-5">
            <img className="img-circle" src="https://i.imgur.com/4f7ApkG.png"></img>
	         </div>
		       <div className="col-md-6">
             <div className="row">
               <h1 className="text-light center" style={{fontSize: '70px', padding: '20px'}}>Matthew Davies</h1>
             </div>
             <br></br>
             <br></br>
             <div className="row">
               <p className="center text-light" style={{fontSize: '20px'}}> Hello there! I am an aspiring software developer and musician well on my way to receiving my Bsc IT degree by the
                  end of 2020. Although primarily a back-end programmer I have a passion and love for fluid UI design and focusing on the user experience of applications.   </p>
             </div>
		       </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
        <h1 className="text-light center" style={{fontSize: '55px', padding: '20px'}}>About</h1>
        </div>
        <div className="row space">
          <div className="col-md-4">
            <div id="hexagon" className="tap-hexagon center">
             <FontAwesomeIcon icon={faBook} size="3x"></FontAwesomeIcon>
            </div> 
            <h2 className="h-skill text-light">Fast Learner</h2>
            <p className="text-light center">I am a strategic thinker and a great listener.</p>
          </div>
          <div className="col-md-4">
            <div id="hexagon" className="tap-hexagon center">
              <FontAwesomeIcon icon={faPalette} size="3x"></FontAwesomeIcon>
            </div>
            <h2 className="h-skill text-light">Creative</h2>
            <p className="text-light center">My projects always include inspiring flares and inventive layouts.</p>
          </div>
          <div className="col-md-4">
          <div id="hexagon" className="tap-hexagon center">
              <FontAwesomeIcon icon={faFistRaised} size="3x"></FontAwesomeIcon>
            </div>
            <h2 className="h-skill text-light">Motivated</h2>
            <p className="text-light center">I am young and road ready.</p>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <div id="hexagon" className="tap-hexagon center">
             <FontAwesomeIcon icon={faClipboardList} size="3x"></FontAwesomeIcon>
            </div> 
            <h2 className="h-skill text-light">Organized</h2>
            <p className="text-light center">I keep my code neat, legible and logically sorted.</p>
          </div>
          <div className="col-md-4">
            <div id="hexagon" className="tap-hexagon center">
              <FontAwesomeIcon icon={faComments} size="3x"></FontAwesomeIcon>
            </div>
            <h2 className="h-skill text-light">Communication</h2>
            <p className="text-light center">I have excellent people skills and love working with others.</p>
          </div>
          <div className="col-md-4">
          <div id="hexagon" className="tap-hexagon center">
              <FontAwesomeIcon icon={faClock} size="3x"></FontAwesomeIcon>
            </div>
            <h2 className="h-skill text-light">Time Management</h2>
            <p className="text-light center">I like to work smart and plan ahead.</p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
        <h1 className="text-light center" style={{fontSize: '55px', padding: '20px'}}>Skills</h1>
        </div>
        <div className="row space">
        <div className="col-md-4">
          <div className="container center vertical-center" style={{width: '70%', margin: 'auto'}}>
            <h2 className="center text-light">These percentages are based on the knowledge that I have aquired during my degree</h2>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="text-light center">Angular</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressAngular}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>
          <h2 className="text-light center">React</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressReact}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>    
          <h2 className="text-light center">HTML</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressHtml}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>  
          <h2 className="text-light center">CSS</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressCss}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>  
          <h2 className="text-light center">JavaScript</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressJavas}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>  
        </div>
        <div className="col-md-4">  
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <h1 className="text-light center space" style={{fontSize: '55px', padding: '20px'}}>Education</h1>
        </div>
        <div className="row space">
          <div className="col-md-6 center">
            <div className="container center">
              <h2 className="text-light center" style={{paddingTop: '30px'}}>BACHELOR OF SCIENCE, MAJOR IN INFORMATION TECHNOLOGY</h2>
              <br></br>
              <img className="center" src="https://i.imgur.com/mTl82x8.png" style={{width: '400px', height: 'auto'}}></img>
              <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                <a href="http://www.nwu.ac.za/" target="_blank" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Visit NWU</a>
               <a href="http://www.nwu.ac.za/sites/www.nwu.ac.za/files/files/p-csis/documents/BSc_in_IT.pdf" target="_blank" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faBinoculars} /> View Degree Summary<i className="fas fa-external-link-square-alt ml-2" /></a>
             </div>
            </div>
            <br></br>
          </div>
          <div className="col-md-6">
          <div className="container center">
              <h2 className="text-light center" style={{paddingTop: '30px'}}>BACHELOR OF SCIENCE, MAJOR IN INFORMATION TECHNOLOGY</h2>
              <br></br>
              <img className="center" src="https://i.imgur.com/mTl82x8.png" style={{width: '400px', height: 'auto'}}></img>
              <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                <a href="http://www.nwu.ac.za/" target="_blank" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Visit NWU</a>
               <a href="http://www.nwu.ac.za/sites/www.nwu.ac.za/files/files/p-csis/documents/BSc_in_IT.pdf" target="_blank" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faBinoculars} /> View Degree Summary<i className="fas fa-external-link-square-alt ml-2" /></a>
             </div>
            </div>
          </div>
       </div>
        <br></br>
        <br></br>
      </div>
    </motion.div>
  )
}

  interact('.tap-hexagon')
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
  console.log('The link was clicked.');
  if ( $(window).scrollTop() > 10 ) {
    $('.navbar').addClass('active');
    console.log($(window).scrollTop());
} else {
    $('.navbar').removeClass('active');
    
}
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
       <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 center">
           <h1 className="text-light center" style={{fontSize: '70px'}}>Matthew Davies</h1>
           <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
            <a className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Start Tour</a>
            <a href="https://github.com/davies3matt" target="https://github.com/davies3matt" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faGithub} /> Visit My Github Profile<i className="fas fa-external-link-square-alt ml-2" /></a>
           </div>
          </div>
        </div>
        <DivScroll></DivScroll>
      </div>
    </motion.div>
  );

  

  
}

export default App;
