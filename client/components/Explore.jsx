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
          "city": "SF",
          "state": "CA",
          "thingsToEat": ["california pizza", "sushirito"],
          "hotSpot": ["Golden Gate Bridge", "Piers 19", "Muir Woods"]
        },
        {
          "city": "Oakland",
          "state": "CA",
          "thingsToEat": ["Sushi", "Barbeque Chicken"],
          "hotSpot": ["Lake Meritt", "Broadway St"]
        },
        {
          "city": "NYC",
          "state": "NY",
          "thingsToEat": ["Buffalo Wings", "New York Pizza"],
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
