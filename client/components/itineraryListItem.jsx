import React from 'react';

const ItineraryListItem = ({place, removeItem}) => {
  return (
    <li className="itineraryItem">
      <button onClick={removeItem}>Remove</button>
      <div>
        <h4>Place: {place.name}</h4><br/>
        <label>Address: </label>{place.formatted_address}<br/>
        <label>Phone: </label>{place.formatted_phone_number}<br/>
        <label>Rating: </label>{place.rating}<br/>
        <a target="_blank" href={place.website}><label>Website</label></a>
      </div>
    </li>
  );
};


export default ItineraryListItem;
