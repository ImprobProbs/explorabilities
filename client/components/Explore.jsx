import React from 'react';
import MapContainer from './MapContainer.jsx';
import Place from './Place.jsx';
import ItineraryList from './itineraryList.jsx';

export default class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      data: [
        {
          "name" : "Golden Gate Bridge",
          "formatted_address": "Golden Gate Bridge, San Francisco, CA",
          "international_phone_number": "+1 510-839-0017",
          "rating": 3.4,
          "website": "http://goldengatebridge.com/",
          "hotSpot": ["Golden Gate Bridge", "Piers 19", "Muir Woods"]
        },
        {
          "name" : "The Terrace Room Restaurant",
          "formatted_address": "1800 Madison St, Oakland, CA 94612",
          "international_phone_number": "(510) 903-3771",
          "rating": 3.8,
          "website": "theterraceroom.com",
          "hotSpot": ["Lake Meritt", "Broadway St"]
        },
        {
          "name" : "Central Park",
          "formatted_address": "1 Muir Woods Rd, Mill Valley, CA 94941",
          "international_phone_number": "(415) 388-2595",
          "rating": 4.6,
          "hotSpot": ["Central Park", "Broadway Theatre", "Statue of Loberty"]
        }
      ]
    };
  }
  render() {
    return (
      <div id="exploreContainer">
        <MapContainer updatePlace={this.updatePlace.bind(this)}/>
        <div id="exploreContent" className="clearfix">
          <Place place={this.state.place}/>
          <ItineraryList list={this.state.data}/>
        </div>
      </div>
    );
  }

  updatePlace(place) {
    this.setState({
      place: place
    });
  }
}
