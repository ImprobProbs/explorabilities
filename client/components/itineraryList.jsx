import React from 'react';

const ItineraryList = (props)  => (
  <div id="itinerary">
    <h3 className="itineraryHeader">Itinerary List</h3>
    <ul>
      {props.list.map(function(listValue, index){
        return (
          <li key={index} className="itineraryItem">
            <div>
               <label>City:</label><a href ="#">{listValue.city}</a><br/>
               <label>State:</label><a href ="#">{listValue.state}</a><br/>
               <label>Things To Eat: </label><a href ="#">{listValue.thingsToEat}</a><br/>
               <label>Hot Spot: </label><a href ="#">{listValue.hotSpot}</a>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ItineraryList;