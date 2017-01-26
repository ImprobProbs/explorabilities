import React from 'react';
import axios from 'axios';

export default class Signin extends React.Component {
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
        <div className="error"></div>
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;

    axios.get('/users/signin', {
      params: {
        email: email,
        password: password
      }
    })
    .then(function(response){
      console.log(response.data);
      console.log(response.status);
    });
  }
};
