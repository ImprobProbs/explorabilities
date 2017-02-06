import React from 'react';
import Review from './Review.jsx';
import StarRatingComponent from 'react-star-rating-component';

export default class Place extends React.Component {
  constructor(props) {
    super(props);
  }

  renderReviews () {
    if (!this.props.reviews) {
      if (this.props.place.reviews) {
        return this.props.place.reviews.map((review, index) =>
          <Review
            key={index}
            review={review.text}
            reviewer={review.author_name}
            rating={review.rating}
            date={review.relative_time_description}
          />
        );
      } else {
        return;
      }
    } else {
      return (
        <Review />
      );
    }
  }

  render() {
    if (Object.keys(this.props.place).length > 0) {
      return (
        <div id='place'>
          <div id="placeContent">
            <button onClick={this.props.addItem}>Add to Itinerary</button>
            <h2>{this.props.place.name}</h2>
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
                  <td id="place-rating">
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      starCount={5}
                      value={this.props.place.rating}
                    />
                  </td>

                </tr>
                <tr id="place-website-row" className="place_row">
                  <td className="place_attribute_name">Website:</td>
                  <td id="place-website"><a href={`${this.props.place.website}`}>{this.props.place.website}</a></td>
                </tr>
                <tr id="place-review-row" className="place_row">
                  <td className="place_attribute_name">Reviews:</td>
                  {this.renderReviews()}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return (
      <div id='place'>
        <div id="placeContent">
          <h3 className="placeHeader">Itinerary Item</h3>
        </div>
      </div>
    );
  }
}
