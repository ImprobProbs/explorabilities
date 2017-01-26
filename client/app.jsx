import React from 'react';
import reactDOM from 'react-dom';
import Search from './components/Search.jsx';
import ItineraryList from './components/itineraryList.jsx';
import key from './config/keys.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="exploreBody">
        <div id="exploreContainer">
          <Search />
          <div id="googleMaps">
            <iframe width="600" height="450" frameBorder="0" style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQBpAG2ahYAR_6128GcTUEo&key=${key.default}`} allowFullScreen></iframe>
          </div>
          <ItineraryList list = {[1,2,3]}/>
        </div>
      </div>
    );
  }
}
