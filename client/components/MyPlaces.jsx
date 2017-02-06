import React from 'react';
import axios from 'axios';
import bluebird from 'bluebird';
import ItineraryList from './itineraryList.jsx';

export default class MyPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: {}
    };
  }

  render() {
    return (
      <div id="myPlacesContainer">
        <div id="myPlacesContent" className="clearfix">
          <div>
            Float this left
          </div>
          {/* <ItineraryList
            list={this.state.itineraries}
            itineraryName="Bali"
          /> */}
          <div id="map">

          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getItineraries();
  }

  getItineraries() {
    const context = this;

    axios.get('/itinerary', {
      params: {
        token: localStorage.token
      }
    })
    .then(function(res) {
      console.log(res.data);
      context.buildItineraries(res.data);
    })
    .catch(function(error) {
      console.log(error, 'error retreiving itineraries');
    });
  }

  buildItineraries(data) {
    const itineraries = {};
    const promises = [];
    const context = this;

    this.buildMap(setItineraries);

    function setItineraries(service) {
      data.forEach((itinerary) => {
        let placeID = itinerary.placeID;
        let key = itinerary.itineraryID;
        let name = itinerary.itineraryName;

        service.getDetails({
          placeId: placeID
        }, (place, status) => {
          if (itineraries[key] === undefined) {
            itineraries[key] = {};
            itineraries[key].name = name;
            itineraries[key].places = [];
          }
          itineraries[key].places.push(place);

          context.setState({
            itineraries: itineraries
          });

          console.log(context.state.itineraries);
        });
      });
    }


  }

  buildMap(callback) {
    const key = 'AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI';
    const url = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&libraries=places&callback=initMap';

    window.initMap = initMap;
    const ref = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = url;
    ref.parentNode.insertBefore(script, ref);
    script.onload = function () {
      this.remove();
    };

    function initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.775, lng: -122.42 },
        zoom: 8,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      });

      const service = new google.maps.places.PlacesService(map);

      callback(service);
    }
  }

  searchPromises() {
    const request = {
      placeId: data[0].placeID
    };

    service.getDetails(request, callback);

    function callback(place, status) {
      console.log(place);
    }

  }
}
