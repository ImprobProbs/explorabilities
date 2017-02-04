import React from 'react';
import axios from 'axios';

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label id="searchLabel">
            <img src="img/magnifying-glass.png"/>
          </label>
          <input
            id="searchForm"
            type="text"
            placeholder="Enter a Destination (E.g. Cancun, Mexico)"
          />
        </form>
        <div id="googleMaps"></div>
      </div>
    );
  }

  componentDidMount() {
    this.createMap();
  }

  createMap() {
    const context = this;

    /* ########## JSONP call for Google Map data ########## */
    (function fetchMap() {
      window.initMap = initMap;
      const ref = window.document.getElementsByTagName('script')[0];
      const script = window.document.createElement('script');
      script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI&libraries=places&callback=initMap';
      ref.parentNode.insertBefore(script, ref);
      script.onload = function () {
        this.remove();
      };
    })();

    /* ################### Map Init ################### */
    let map, places, autocomplete;
    let markers = [];
    const searchForm = document.getElementById('searchForm');


    function initMap() {
      const sanFrancisco = {lat: 37.775, lng: -122.42};

      map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: sanFrancisco,
        zoom: 8,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      });

      autocomplete = new google.maps.places.Autocomplete((
          document.getElementById('searchForm')), {
            types: ['geocode']
          });

      places = new google.maps.places.PlacesService(map);

      autocomplete.addListener('place_changed', onPlaceChanged);

      map.addListener('dragend', zoomFilter);
    }

    function zoomFilter() {
      if (map.getZoom() > 10) { search(); }
    }

    // When the user selects a city, get the place details for the city and
    // zoom the map in on the city.
    function onPlaceChanged() {
      const place = autocomplete.getPlace();
      context.props.updateQuery(place);

      if (place.geometry) {
        map.panTo(place.geometry.location);
        console.log(map.getCenter().toUrlValue());
        map.setZoom(15);
        search();
      } else {
        // searchForm.placeholder = "Enter Your Destination (E.g. Cancun, Mexico)";
        searchForm.value = '';
      }
    }

    // Search for attractions in the selected city, within the viewport of the map.
    function search() {
      const search = {
        bounds: map.getBounds(),
        types: [
          'amusement_park',
          'aquarium',
          'art_gallery',
          'bar',
          'book_store',
          'bowling_alley',
          'cafe',
          'campground',
          'casino',
          'library',
          //'lodging',
          'movie_theater',
          'museum',
          'night_club',
          'park',
          //'restaurant',
          'spa',
          'stadium',
          'zoo'
        ]
      };

      places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          clearMarkers();
          // Create a marker for each item found
          for (var i = 0; i < results.length; i++) {
            let iconImage = {
              url: results[i].icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(15, 15)
            };
            // Use marker animation to drop the icons incrementally on the map.
            markers[i] = new google.maps.Marker({
              position: results[i].geometry.location,
              animation: google.maps.Animation.DROP,
              icon: iconImage
            });
            // If the user clicks a marker, call setPlace to update the object in the Place component.
            markers[i].placeResult = results[i];
            google.maps.event.addListener(markers[i], 'click', setPlace);
            setTimeout(dropMarker(i), i * 10);
          }
        }
      });
    }

    function clearMarkers() {
      for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
          markers[i].setMap(null);
        }
      }
      markers = [];
    }

    function dropMarker(i) {
      return function() {
        markers[i].setMap(map);
      };
    }

    function setPlace() {
      const marker = this;
      places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
          }
          context.props.updatePlace(place);
        });
    }
  }
}
