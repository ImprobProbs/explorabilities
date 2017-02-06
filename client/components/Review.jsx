import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = (props) => {
  const { rating } = props.rating;
  return (
    <div id="place-address">
      <em>{props.reviewer}</em><br/>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={props.rating}
      />
      <article>{props.review}</article>
      <em>{props.date}</em>
      <br/><br/>
    </div>
  );
};


export default Review;
