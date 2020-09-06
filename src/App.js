import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from '@testing-library/react';

library.add(fab, faCheckSquare, faCoffee, faGithub,faRocket)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else { 
      return (
        <div className="container">
          <h1 className="text-light" style={{fontSize: '70px'}}>Matthew Davies</h1>
          <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
            <a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip" className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Start Tour</a>
            <a href="https://github.com/davies3matt" target="_blank" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faGithub} /> Visit My Github Profile<i className="fas fa-external-link-square-alt ml-2" /></a>
          </div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | E-mail: {item.email}
              </li>
            ))};
          </ul>
        </div>
    );
  }
}}

ReactDOM.render(App, document.getElementById('root'));
export default App;
