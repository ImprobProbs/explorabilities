import React from 'react';
import reactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import ItineraryList from './components/itineraryList.jsx';
import MapContainer from './components/MapContainer.jsx'
import Place from './components/Place.jsx'
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
      }
    }
  render() {
    return (
      <div id="exploreBody">
        <div id="exploreContainer">
          <Nav />
          <MapContainer />
<<<<<<< 6f59f90c65de2722359b4e4cda1d8c18bf56cdd1
          <div id="exploreContent">
            <Place />
            <ItineraryList list = {this.state.data}/>
          </div>
||||||| merged common ancestors
          <Place />
          <ItineraryList list = {[1,2,3,4,5]}/>
          <ItineraryList list = {this.state.data}/>
=======
          <Place />
          <ItineraryList list = {this.state.data}/>
>>>>>>> fix css
        </div>
      </div>
    );
  }
}
