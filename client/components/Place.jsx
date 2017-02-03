import React from 'react';

export default class Place extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPhotos: this.props.place.photos && this.props.place.photos.length > 0
    };
  }

  render() {
    return (
      <div id='place'>
        <div id="placeContent">
          <button>Add to Itinerary</button>
          {console.log('place in place ', this.props.place)}
          <h2>{this.props.place.name}</h2>
          {console.log(this.state.hasPhotos)}
          {/* <img src={this.props.place.photos[0].getUrl()}/> */}
          <table>
            <tbody>
              <tr id="place-address-row" className="place_row">
                <td className="place_attribute_name">Address:</td>
                <td id="place-address">{this.props.place.formatted_address}</td>
              </tr>
              <tr id="place-phone-row" className="place_row">
                <td className="place_attribute_name">Telephone:</td>
                <td id="place-phone">{this.props.place.formatted_phone_number}</td>
              </tr>
              <tr id="place-rating-row" className="place_row">
                <td className="place_attribute_name">Rating:</td>
                <td id="place-rating">{this.props.place.rating}</td>
              </tr>
              <tr id="place-website-row" className="place_row">
                <td className="place_attribute_name">Website:</td>
                <td id="place-website">{this.props.place.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
