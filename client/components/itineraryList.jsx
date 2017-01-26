import React from 'react';

const ItineraryList = (props)  => (
  <ul id="itinerary">
    {props.list.map(function(listValue, index){
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
