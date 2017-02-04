import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ItineraryListItem = ({place, removeItem}) => {
  return (
    <li className="itineraryItem">
      <button onClick={removeItem}>Remove</button>
      <div>
        <h3>Place: <a href ="#">{place.name}</a></h3><br/>
        <label>Address:</label><a href ="#">{place.formatted_address}</a><br/>
        <label>Phone:</label><a href ="#">{place.international_phone_number}</a><br/>
        <label>Rating: </label>
        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <span></span>}
          starCount={5}
          value={place.rating}
        />
        <br/>
        <label>Website: </label><a href ={`${place.website}`}>{place.website}</a>
      </div>
    </li>
  );
};


export default ItineraryListItem;
