import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "../components/Review.css";
import SvgButton from "./nav2/SvgButton";
import arrowButtonImg from "../images/arrow-right-thin.svg";

function Review({ reviews }) {
  let { id } = useParams();
  const history = useHistory();
  id -= 1;
  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h1 className="review__title">{reviews[id].title}</h1>
          <p className="review__text">{reviews[id].text}</p>
          <SvgButton img={arrowButtonImg} size="large" rotation={180} />
        </div>
      )}
    </div>
  );
}

export default Review;
