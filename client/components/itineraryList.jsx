import React from 'react';

const ItineraryList = (props)  => (
  <div>
    <ul id="itinerary">
      {props.list.map(function(listValue, index) {
        return (
          <li key={index}>
            <a href ="#">City: {listValue.city}</a>
            <a href ="#">State: {listValue.state}</a>
            <a href ="#">Things To Eat: {listValue.thingsToEat}</a>
            <a href ="#">Hot Spot: {listValue.hotSpot}</a>
          </li>
        );
      })}
    </ul>
  </div>
);


export default ItineraryList;
