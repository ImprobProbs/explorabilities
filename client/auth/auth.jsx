import React from 'react';
import {Link} from 'react-router';

export default class Auth extends React.Component {
  render () {
    return (
      <div id="authBody">
        <div id="authContainer">
          <div id="authHeader">
            <h1>Welcome to <span className="beautify">Explorabilities</span></h1>
          </div>
          <img src="img/palmtree.png"></img>
          <div id="authContent">
            {React.cloneElement(this.props.children, {formSubmit: this.formSubmit})}
          </div>
          <div id="authNav">
            <Link to="auth/signin">
              <button>Signin</button>
            </Link>
            <Link to="auth/signup">
              <button>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
