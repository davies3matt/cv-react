import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import APItest from "./API_test";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }



  render() {
      return (
        <>
          <Router>
            <div className="hcontainer">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home></Home>
                  <APItest></APItest>
                  <div className="tcontainer">
                    <div id="footerleftpane">
                      <p>TESTI WESTI</p>
                    </div>
                    <div id="footerRightPane">
                      <p>TESTI WESTI</p>
                    </div>
                    <div id="footerMidPane">
                      <p>TESTI WESTI</p>
                    </div>
                  </div>
                </Route>
              </Switch>
                              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
            </div>
          </Router>
        </>
        
        
    );
}


}



function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}

export default App;
