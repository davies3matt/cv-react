import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: '' , hunterCode: ''};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMail = this.handleMail.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<div>
        <h1 className="center text-light">Contact Me!</h1>
        <br></br>
        <textarea 
            placeholder="Name"
            style={{width: '100%', height: '35px', background: "darkslategray", color: 'white'}}
            onChange={this.handleName}>
        </textarea>
        <textarea 
            placeholder="Enter email"
            style={{width: '100%', height: '35px', background: "darkslategray", color: 'white'}}
            onChange={this.handleMail}
            >

        </textarea>
      	<textarea
        	id="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Your message"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px', background: "darkslategray", color: 'white'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn-dark" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleName(event) {
      this.setState({name: event.target.value})
  }

  handleMail(event) {
      this.setState({email: event.target.value})
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
    const templateId = 'template_9fhbbsg';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_wwhjphl', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}