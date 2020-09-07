import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class APItest extends Component {
    
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
            <ul>
            {items.map(item => (
              <li key={item.id}>
                Name: {item.name} | E-mail: {item.email}
              </li>
            ))};
          </ul>
          )}
        }
}

export default APItest;