import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import MapContainer from './components/MapContainer.jsx';
import Place from './components/Place.jsx';
import ItineraryList from './components/itineraryList.jsx';

import data from "./stubs.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="contentBody">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
