import React from 'react';

const Review = (props) => {
  console.log(props);
  return (
    <div id="place-address">
      <em>{props.reviewer}</em><br/>
      <cite>Rating: {props.rating}</cite>
      <article>{props.review}</article>
      <em>{props.date}</em>
      <br/><br/>
    </div>
  );
};


export default Review;
