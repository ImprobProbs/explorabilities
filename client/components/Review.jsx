import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = (props) => {
  console.log(props);
  const { rating } = props.rating;
  return (
    <div id="place-address">
      <em>{props.reviewer}</em><br/>
      <h4>Rating from state: {rating}</h4>
      <StarRatingComponent
        name="rate2"
        editing={false}
        renderStarIcon={() => <span></span>}
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
