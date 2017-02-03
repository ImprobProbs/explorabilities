import React from 'react';
import MapContainer from './MapContainer.jsx';
import Place from './Place.jsx';
import ItineraryList from './itineraryList.jsx';

export default class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {},
      itinerary: {}
    };
  }
  render() {
    return (
      <div id="exploreContainer">
        <MapContainer updatePlace={this.updatePlace.bind(this)}/>
        <div id="exploreContent" className="clearfix">
          <Place place={this.state.place} addItem={this.addItem.bind(this)}/>
          <ItineraryList list={this.state.itinerary} removeItem={this.removeItem.bind(this)}/>
        </div>
      </div>
    );
  }

  updatePlace(place) {
    this.setState({
      place: place
    });
  }

  addItem() {
    this.state.itinerary[this.state.place.id] = this.state.place;
    this.setState({
      itinerary: this.state.itinerary
    });
  }

  removeItem(key) {
    delete this.state.itinerary[key];
    this.setState({
      itinerary: this.state.itinerary
    });
  }
}
