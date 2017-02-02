import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <button>Log Out</button>
          </Link>
        </nav>
      </div>
    );
  }
}
