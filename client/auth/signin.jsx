import React from 'react';
import axios from 'axios';

export default class Signin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render () {
    return (
      <div id="signin">
        <h2>Log in to Begin Exploring</h2>
        <form name="signinForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Signin</button>
        </form>
        <div className="error-text">{this.state.error}</div>
      </div>
    );
  }

  handleSubmit (e) {
    console.log(this);
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    const context = this;

    axios.get('/users/signin', {
      params: {
        email: email,
        password: password
      }
    })
    .then(function(response) {
      if (response.status === 200) {
        this.context.router.transitionTo('/');
      }
    })
    .catch((err) => {
      context.setState({
        error: err.response.data
      });
    });
  }
}
