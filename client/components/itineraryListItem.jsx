import React from 'react';

const ItineraryListItem = ({place, removeItem}) => {
  return (
    <li className="itineraryItem">
      <button onClick={removeItem}>Remove</button>
      <div>
        <h3>Place: <a href ="#">{place.name}</a></h3><br/>
        <label>Address:</label><a href ="#">{place.formatted_address}</a><br/>
        <label>Phone:</label><a href ="#">{place.international_phone_number}</a><br/>
        <label>Rating: </label><a href ="#">{place.rating}</a><br/>
        <label>Website: </label><a href ="#">{place.website}</a>
      </div>
    </li>
  );
};


export default ItineraryListItem;
