import React from 'react';
import ItineraryListItem from './itineraryListItem.jsx';

const ItineraryList = (props)  => {
  let headerText = 'Itinerary';
  let saveButton = '';

  if (props.query.name) {
    headerText += ' for ' + props.query.name;
  }

  if (Object.keys(props.list).length > 0 && props.saveMessage.length === 0) {
    saveButton = <button className="save-itinerary" onClick={props.saveItinerary}>Save Itinerary</button>;
  }

  return (
    <div id="itinerary">
      <div className="clearfix">
        <h3 className="itineraryHeader">{headerText}</h3>
        {saveButton}
        <p className="save-itinerary save-text">{props.saveMessage}</p>
      </div>
      <ul>
        {Object.keys(props.list).map((key) => (
            <ItineraryListItem
              key={props.list[key].place_id}
              place={props.list[key]}
              /* Binding list[key].id as the first argument when RemoveItem is called */
              removeItem={props.removeItem.bind(this, props.list[key].place_id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default ItineraryList;
