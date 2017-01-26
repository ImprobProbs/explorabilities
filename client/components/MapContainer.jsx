import React from 'react';
// import Map from './Map.jsx'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 800,
      place: "https://www.google.com/maps/embed/v1/search?key=AIzaSyA28QjAXO82XK34rdGHSBI8nQ8bSRmLQ6g&q=point_of_interest+in+Cancun"
    };
  }

  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div id="googleMaps">
        <iframe id="mapEmbed" frameBorder="0" style={{border: 10}}
          src={this.state.place} allowFullScreen></iframe>
      </div>
      )
  }
}

export default MapContainer;
// GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)