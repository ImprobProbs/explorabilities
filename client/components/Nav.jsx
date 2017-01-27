import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='nav'>
        <button className="btn" id="myPlaces">My Places</button>
        <button className="btn" id="exploreButton">Explore!</button>
        <button className="btn" id="logout">log out</button>
      </div>
    );
  }
}
