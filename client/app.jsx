import React from 'react';
import reactDOM from 'react-dom';
import Search from './components/Search.jsx';
import ItineraryList from './components/itineraryList.jsx';
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
      <div>
        <Search />
        <div id="googleMaps">
          <iframe width="600" height="450" frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQBpAG2ahYAR_6128GcTUEo&key=${window.GOOGlE_API_KEY}`} allowFullScreen></iframe>
        </div>
        <ItineraryList list = {this.state.data}/>
      </div>
    );
  }
}


