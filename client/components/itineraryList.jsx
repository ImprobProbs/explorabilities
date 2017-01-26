import React from 'react';

const ItineraryList = (props)  => (
  <tr id="itinerary">
    {props.list.map(function(listValue, index){
      return (
        <td key={index}>
         <a href ="#">City: {listValue.city}</a>
         <a href ="#">State: {listValue.state}</a>
         <a href ="#">Things To Eat: {listValue.thingsToEat}</a>
         <a href ="#">Hot Spot: {listValue.hotSpot}</a>
        </td>
      );
    })}
  </tr>
);


export default ItineraryList;
