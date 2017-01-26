import React from 'react';
import axios from 'axios'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Cancun',
      key: 'AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI'
    };
  }

  render() {
    return (
      <div>
        <form>
          <input id="searchForm" type="text" value={this.state.query} onChange={this.updateQuery.bind(this)} />
          <button type="submit" id="exploreButton">Explore!</button>
        </form>
        <div id="googleMaps">
          <iframe id="mapEmbed" frameBorder="0" style={{border: 10}}
            src={`https://www.google.com/maps/embed/v1/search?key=${this.state.key}&q=point_of_interest+near+${this.state.query}`}>

          </iframe>
        </div>
      </div>
    );
  }

  componentWillMount () {
    // this.getKey();
  }

  getKey () {
    axios.get('api/google/key')
    .then(function(response){
      //AXIOS GET THE MAP
      //SOME CALLBACK(response)
      console.log(response.data);
      console.log(response.status);
    }).catch(function(error) {
      console.log(error);
    });
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    });
  }
};
