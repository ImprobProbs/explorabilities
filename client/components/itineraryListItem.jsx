import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ItineraryListItem = ({place, removeItem}) => {
  return (
    <li className="itineraryItem">
      <button onClick={removeItem}>Remove</button>
      <div>
        <h3>Place: <a href ={`${place.website}`}>{place.name}</a></h3><br/>
        <label>Address: </label><span>{place.formatted_address}</span><br/>
        <label>Phone: </label><span>{place.international_phone_number}</span><br/>
        <label>Rating: </label>
        <StarRatingComponent
          name="rate2"
          editing={false}
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
