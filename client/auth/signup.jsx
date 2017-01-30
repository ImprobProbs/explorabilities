import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div id="signup">
        <h2>Manage your next vacation. Find things-to-do and local events and store it all in one place.</h2>
        <form name="signupForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Signup</button>
        </form>
        <div className="error-text">{this.state.error}</div>
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;

    axios.post('/users/create', {
      email: email,
      password: password
    })
    .then(function(response) {
      console.log(response.data);
      console.log(response.status);
    }).catch(function(error) {
      context.setState({
        error: err.response.data
      });
    });
  }
}
