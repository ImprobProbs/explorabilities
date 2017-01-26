import React from 'react';

const ItineraryList = (props)  => (
  <ul>
    {props.list.map(function(listValue){
      return (
        <li key={listValue}>
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
