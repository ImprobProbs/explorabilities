import React from 'react';
import axios from 'axios';

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Cancun',
    };
  }

  render() {
    return (
      <div>
        <form>
          <input id="searchForm" type="text" value={this.state.query} onChange={this.updateQuery.bind(this)} />
        </form>
        <div id="googleMaps">
          <iframe id="mapEmbed" frameBorder="0" style={{border: 10}} onClick={this.test}
            src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyCBb0bm-_wNIf3oDMi-5PN_zeOf1bRWstI&q=point_of_interest+near+${this.state.query}`}>
          }
          </iframe>
        </div>
      </div>
    );
  }

  test(e) {
    console.log(e.target);
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    });
  }
}
