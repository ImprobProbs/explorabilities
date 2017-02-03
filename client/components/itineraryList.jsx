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
        {Object.keys(props.list).map((key) => (
            <ItineraryListItem
              key={props.list[key].id}
              place={props.list[key]}
              //Binding list[key].id so it is the first argument when RemoveItem is called
              removeItem={props.removeItem.bind(this, props.list[key].id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default ItineraryList;
