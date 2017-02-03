import React from 'react';

const ItineraryListItem = (props) => {
  return (
    <li className="itineraryItem">
      <div>
        <h4>Place: <a href ="#">{props.name}</a></h4><br/>
        <label>Address:</label><a href ="#">{props.address}</a><br/>
        <label>Phone:</label><a href ="#">{props.phone}</a><br/>
        <label>Rating: </label><a href ="#">{props.rating}</a><br/>
        <label>Website: </label><a href ="#">{props.website}</a>
      </div>
      <div>
        <input type="button" value="Remove" />
        <input type="button" value="Save" />
      </div>
    </li>
  );
};


export default ItineraryListItem;
