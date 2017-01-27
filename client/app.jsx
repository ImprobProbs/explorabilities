import React from 'react';
import reactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import ItineraryList from './components/itineraryList.jsx';
import MapContainer from './components/MapContainer.jsx';
import Place from './components/Place.jsx';
import data from "./stubs.js";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      <div id="exploreBody">
        <div id="exploreContainer">
          <Nav />
          <MapContainer />
          <div id="exploreContent" className="clearfix">
            <Place />
            <ItineraryList list = {this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}
