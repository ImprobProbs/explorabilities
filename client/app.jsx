import React from 'react';
import reactDOM from 'react-dom';
import Search from './components/Search.jsx';
import ItineraryList from './components/itineraryList.jsx';
import MapContainer from './components/MapContainer.jsx'


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <MapContainer />
        <ItineraryList list = {[1,2,3]}/>
      </div>
    );
  }
}
