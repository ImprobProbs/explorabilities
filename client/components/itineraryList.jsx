import React from 'react';
import ItineraryListItem from './itineraryListItem.jsx';

const ItineraryList = (props)  => {
  return (
    <div id="itinerary">
      <h3 className="itineraryHeader">Itinerary List</h3>
      <ul>
        {
          props.list.map((listItem) => (
          <ItineraryListItem
            key={listItem.id}
            city={listItem.city}
            state={listItem.state}
            thingsToEat={listItem.thingsToEat}
            hotSpot={listItem.hotSpot}
          />))
        }
      </ul>
    </div>
  );
};

export default ItineraryList;
