import React from 'react';
import ItineraryListItem from './itineraryListItem.jsx';

const ItineraryList = (props)  => {
  return (
    <div id="itinerary">
      <div className="clearfix">
        <h3 className="itineraryHeader">Itinerary List</h3>
        <button id="save-itinerary">Save Itinerary</button>
      </div>
      <ul>
        {
          props.list.map((listItem) => (
          <ItineraryListItem
            key={listItem.id}
            name={listItem.name}
            address={listItem.formatted_address}
            phone={listItem.international_phone_number}
            rating={listItem.rating}
            website={listItem.website}
            hotSpot={listItem.hotSpot}
          />))
        }
      </ul>
    </div>
  );
};

export default ItineraryList;
