import React from 'react';

export default class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    console.log('MAP LOAD')
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos} />
        </Map>
      </div>
    )
  }
  }
}