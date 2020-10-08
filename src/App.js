import React from 'react';
import './App.css';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faRocket, faPallet, faBook, faPalette, faFistRaised, faClipboardList,faComments,faClock, faBinoculars, faFileDownload, faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery'; 
import interact from 'interactjs';
import './Mail';
import WeatherApp from "./WeatherApp.js";
import Mail from './Mail.js';
import DictionaryApp from './DictionaryApp.js';
library.add(fab, faCheckSquare, faCoffee, faGithub,faRocket,faBook, faPallet, faFistRaised, faClipboardList,faComments, faClock);

//OnScroll Nav-bar effect
$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
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
    <div className="container-fluid bg-light" style={{display: 'inline-block',width: '100%', height: "100%" }}>
          <nav className="navbar navbar-expand-lg fixed-top py-3" style={{display: 'inline-block', width: '100%'}}>
            <div className="nav-container center">
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav center">
                  <li className="nav-item"><NavLink to = "/" className="nav-link text-uppercase font-weight-bold">Home<span className="sr-only">(current)</span></NavLink></li>
                  <li className="nav-item "><NavLink to ="/about" className="nav-link text-uppercase font-weight-bold">About</NavLink></li>
                  <li className="nav-item "><NavLink to ="/contact" className="nav-link text-uppercase font-weight-bold">Contact</NavLink></li>
                  <li className="nav-item "><NavLink to ="/services" className="nav-link text-uppercase font-weight-bold">Services</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row gradient-bg" style={{ paddingLeft: '200px',paddingRight:'200px',height: "100%" }} onScroll={changeNav}>
        <main
          className="col-md-12"
          style={{width:'100%', display: 'inline-block', position: "relative", height: '100%' }}
        >
          <div style={{height: '150px'}}> </div>
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Service}/> 
              <Route path="/" component={Home} />  
            </Switch>
          </AnimatePresence>
        </main>
        <div className="footer">
        <div className="row">
          <div className="col-md-4 center">
            <ul className="social-icons">
                <li><a href="https://www.facebook.com/matthew.davies.1000" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/bhaz26609816" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC5uwwIP1u6ZQfMD1A8VeWdg?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/matthew-davies-a930a8153/" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/davies3matt" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

//Page Transistion & Animation Constants
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

//About Page
function About() {
  const progressAngular = 40;
  const progressReact = 50;
  const progressHtml = 70;
  const progressCss = 60;
  const progressJavas = 65;
  const progressOop = 80;
  const progressIonic = 40;
  const progressNodeJs = 40;

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
            <img className="img-circle" src="https://i.imgur.com/4f7ApkG.png" alt="Matthew Davies profile"></img>
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
            <p className="text-light center">My projects always include sublte flares and clean layouts.</p>
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
            <h2 className="center text-light">These percentages are based on the knowledge that I have aquired during my studies</h2>
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
          <h2 className="text-light center">OOP</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressOop}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>  
          <h2 className="text-light center">Node.js</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressNodeJs}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress"></span>
          </div>  
          <h2 className="text-light center">Ionic</h2>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${progressIonic}%`}}>
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
          <h1 className="text-light center space" style={{fontSize: '55px', padding: '20px',paddingTop: '10px'}}>Education</h1>
        </div>
        <div className="row space">
          <div className="col-md-6 center">
            <div className="container center">
              <h2 className="text-light center" style={{paddingTop: '30px'}}>BACHELOR OF SCIENCE, MAJOR IN INFORMATION TECHNOLOGY</h2>
              <br></br>
              <img className="center" src="https://i.imgur.com/mTl82x8.png" style={{width: '400px', height: 'auto'}} alt="NWU logo"></img>
              <div className="row center" style={{paddingTop:'40px', paddingBottom: '15px'}}>
                <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                  <a href="http://www.nwu.ac.za/" target="_blank" rel="noopener noreferrer" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Visit NWU</a>
                <a href="http://www.nwu.ac.za/sites/www.nwu.ac.za/files/files/p-csis/documents/BSc_in_IT.pdf" target="_blank" rel="noopener noreferrer" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faBinoculars} /> View Degree Summary<i className="fas fa-external-link-square-alt ml-2" /></a>
              </div>
             </div>
            </div>
            <br></br>
          </div>
          <div className="col-md-6">
            <div className="container">
                <h2 className="text-light center" style={{paddingTop: '30px'}}>UDEMY COURSES</h2>
                <div className="row center">
                  <img src="https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png" style={{width: '100px', height: 'auto', paddingTop: '30px'}} alt="angular logo"></img>
                  <img src="https://img.icons8.com/color/452/nodejs.png" style={{width: '150px', height: 'auto', paddingLeft: '30px', paddingTop: '30px'}} alt="nodejs logo"></img>
                  <img src="https://ionicframework.com/blog/wp-content/uploads/2015/05/cropped-logo.png" style={{width: '120px', height: 'auto', paddingLeft: '30px', paddingTop: '30px'}} alt="ionic logo"></img>
                </div>
                <div className="row center" style={{paddingBottom: "28px"}}>
                <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons" style={{paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px'}}>
                  <a href="https://www.udemy.com/course/the-complete-guide-to-angular-2/" target="_blank" rel="noopener noreferrer" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /> Angular - The Complete Guide (2020 Edition)</a>
                  <a href="https://www.udemy.com/course/angular-ionic-node-build-a-real-web-mobile-chat-app/" target="_blank" rel="noopener noreferrer" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" />Angular, Ionic & Node: Build A Real Web & Mobile Chat App</a>
                </div>
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

  //Hexagon OnClick Animation Function
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

//Home Page
function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
       <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 center">
           <h1 className="text-light center" style={{fontSize: '70px'}}>Hello there!</h1>
           <div className="btn-group mt-2 mb-4" style={{padding: '10px'}}role="group" aria-label="actionButtons">
            <button className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><NavLink to ="/about" className="text-light">Start Tour <FontAwesomeIcon icon={faRocket} /></NavLink></button>
            <a href="https://drive.google.com/uc?export=download&id=1sHNgxlDoiWYQgxtY-9-6m3uJaDVvkIjE" download target="_blank" rel="noopener noreferrer" className="d-block btn btn-outline-light"> Download My CV! <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon><i className="fas fa-external-link-square-alt ml-2" /></a>
           </div>
          </div>
        </div>
        <div className="container-space" style={{height: '540px'}}>
      </div>
      </div>  
    </motion.div>
  );
}

//Service Page
function Service() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container-fluid center text-light" style={{paddingBottom: "30px"}}>
        <h1>Weather</h1>
        <div className="row center">
         <h3>Curious About today's forecast?</h3>
        </div> 
        <WeatherApp></WeatherApp>
        <br></br>
        <hr style={{borderTop : '2px dashed white', width: "60%"}}></hr>
        <h1>Dictionary</h1>
        <DictionaryApp></DictionaryApp>
      </div>
      <hr style={{borderTop : '2px dashed white', width: "60%"}}></hr>
    </motion.div>
  );
}

//Contact Page
function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
       <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 center">
           <div className="container">
           <Mail></Mail>
           </div>
          </div>
        </div>
        <div className="container-space" style={{height: '250px'}}></div>
      </div>
    </motion.div>
  );
}

export default App;
