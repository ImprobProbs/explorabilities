import React from 'react';

const ItineraryListItem = ({place, removeItem}) => {
  return (
    <li className="itineraryItem">
      <button onClick={removeItem}>Remove</button>
      <div>
        <h4>Place: <a href ="#">{place.name}</a></h4><br/>
        <label>Address:</label><a href ="#">{place.address}</a><br/>
        <label>Phone:</label><a href ="#">{place.phone}</a><br/>
        <label>Rating: </label><a href ="#">{place.rating}</a><br/>
        <label>Website: </label><a href ="#">{place.website}</a>
      </div>
    </li>
  );
};


export default ItineraryListItem;
