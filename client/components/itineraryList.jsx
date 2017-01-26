import React from 'react';

const ItineraryList = (props)  => (
  <ul id="itinerary">
    {props.list.map(function(listValue){
      // return <li className= "itineraryItem" key={listValue}>{listValue}</li>;
      return (
        <li key={listValue.city}>
         <a href ="#">City: {listValue.city}</a>
         <a href ="#">State: {listValue.state}</a>
         <a href ="#">Things To Eat: {listValue.thingsToEat}</a>
         <a href ="#">Hot Spot: {listValue.hotSpot}</a>
        </li>
      );
    })}
  </ul>
);


export default ItineraryList;
