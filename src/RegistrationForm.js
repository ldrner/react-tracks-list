import React, { Component } from 'react';
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log('submitted, email state');
    event.preventDefault();
  }
  handleEmailChange(event) {
    console.log('email changed', this);
    console.log(event.target.value);
    this.setState({ email: event.target.value });

  }
  render() {
    return <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="e-mail" value={this.state.email} onChange={this.handleEmailChange} className="emailField" />
        <button className="btnSubmit">Save</button>
      </form>;
  }
}

export default RegistrationForm;