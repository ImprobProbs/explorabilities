import React from 'react';
import reactDOM from 'react-dom';
import Search from './components/Search.jsx';
import ItineraryList from './components/itineraryList.jsx';
import MapContainer from './components/MapContainer.jsx'
import Place from './components/Place.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <MapContainer />
        <Place />
        <ItineraryList list = {[1,2,3,4,5]}/>
      </div>
    );
  }
}
