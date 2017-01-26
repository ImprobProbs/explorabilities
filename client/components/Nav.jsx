import React from 'react';

const Nav = () => (
  <div id='nav'>
    <div id="searchBar">
      <input id="searchForm" type="text" />
      <button id="exploreButton">Explore!</button>
    </div> 
    <button className="btn" id="logout">log out</button>
  </div>
)

export default Nav