import React from 'react';
import {Link} from 'react-router';
import authHelpers from '../auth/auth-helpers.js';

const Nav = () => (
  <div className="clearfix nav">
    <h2 className="beautify nav-title">Explorabilities</h2>
    <nav>
      <Link to="myplaces">
        <button>My Places</button>
      </Link>
      <Link to="explore">
        <button>Explore!</button>
      </Link>
      <Link to="auth/signin">
        <button onClick={authHelpers.logout}>Log Out</button>
      </Link>
    </nav>
  </div>
);

export default Nav;
