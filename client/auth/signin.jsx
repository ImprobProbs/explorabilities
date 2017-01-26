import React from 'react';
import {Link} from 'react-router';

export default class Signin extends React.Component {

  render () {
    return (
      <div id="signin">
        <h2>Log in to Begin Exploring</h2>
        <form name="signinForm" onSubmit={this.submit}>
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

  submit (e) {
    e.preventDefault();
    console.log('signin submit')
  }
};
