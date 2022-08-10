import React from "react";
import { useParams } from "react-router-dom";
import "../components/Review.css";

function Review({ reviews }) {
  let { id } = useParams();
  id -= 1;
  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h1 className="review__title">{reviews[id].title}</h1>
          <p className="review__text">{reviews[id].text}</p>
        </div>
      )}
    </div>
  );
}

export default Review;
