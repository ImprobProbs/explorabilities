import React from 'react';

const ItineraryListItem = (props) => {
  return (
    <li className="itineraryItem">
      <div>
         <label>City:</label><a href ="#">{props.city}</a><br/>
         <label>State:</label><a href ="#">{props.state}</a><br/>
         <label>Things To Eat: </label><a href ="#">{props.thingsToEat}</a><br/>
         <label>Hot Spot: </label><a href ="#">{props.hotSpot}</a>
      </div>
    </li>
  );
};


export default ItineraryListItem;
