import React from 'react';
import ReactDOM from 'react-dom';
import './DivScroll.css';

class DivScroll extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
  }
  
  onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }

  render() {
    const {
      scrollTop
    } = this.state
    return (
      <div
        ref={this.myRef}
        onScroll={this.onScroll}>
          {scrollTop}
      </div>
    )
  }
}

ReactDOM.render(
  <DivScroll />,
  document.getElementById('root')
);

export default DivScroll;
