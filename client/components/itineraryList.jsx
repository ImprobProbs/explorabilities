import React from 'react';

const ItineraryList = (props)  => (
  <ul className="itinerary">
    {props.list.map(function(listValue){
      return <li key={listValue}>{listValue}</li>;
    })}
  </ul>
);


export default ItineraryList;


// export default class itineraryList extends React.createClass {
//   constructor (props) {
//     super(props);
//   }

//   render () {
//     return (
//       <ul>
//         {this.props.list.map(function(listValue){
//           return <li>{listValue}</li>;
//         })}
//       </ul>
//     );
//   }
// };
