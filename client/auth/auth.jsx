import React from 'react';
import {Link} from 'react-router';

export default class Auth extends React.Component {

  render () {
    return (
      <div>
        <h2>Welcome to <span className="beautify">Explorabilities</span></h2>
        {this.props.children}
        <div>
          <Link to="signin">
            <button className="btn signup-button">Signin</button>
          </Link>
          <Link to="signup">
            <button className="btn signup-button">Signup</button>
          </Link>
        </div>
      </div>
    );
  }
};
