import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Link to="myplaces">
          My Places
        </Link>
        &nbsp;|&nbsp;
        <Link to="explore">
          Explore!
        </Link>
        &nbsp;|&nbsp;
        <Link to="auth/signin">
          Log Out
        </Link>
      </nav>
    );
  }
}
