import React from 'react';
import axios from 'axios';
import MapContainer from './MapContainer.jsx';
import Place from './Place.jsx';
import ItineraryList from './itineraryList.jsx';

export default class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {},
      query: '',
      itinerary: {}
    };
  }
  render() {
    return (
      <div id="exploreContainer">
        <MapContainer updatePlace={this.updatePlace.bind(this)} updateQuery={this.updateQuery.bind(this)}/>
        <div id="exploreContent" className="clearfix">
          <Place place={this.state.place} addItem={this.addItem.bind(this)}/>
          <ItineraryList
            list={this.state.itinerary}
            query={this.state.query}
            removeItem={this.removeItem.bind(this)}
            saveItinerary={this.saveItinerary.bind(this)}
          />
        </div>
      </div>
    );
  }

  updatePlace(place) {
    this.setState({
      place: place
    });
    console.log(place);
  }

  updateQuery(query) {
    this.setState({
      place: {},
      query: query,
      itinerary: {}
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

  saveItinerary() {
    const context = this;

    axios.post('/itinerary', {
      // user: session user
      itineraryID: this.state.query.id,
      placeIDs: Object.keys(this.state.itinerary)
    })
    .then(function(response) {
      console.log(response.data);
      console.log(response.status);
      //Display 'it saved' message

    })
    .catch(function(error) {
      context.setState({
        error: error.response.data
      });
    });
  }
}
