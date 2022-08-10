import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "../components/Reviews.css";

function Reviews({ reviews }) {
  const { url } = useRouteMatch();
  return (
    <>
      <ul className="review-list">
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <Link to={`${url}/${review.id}`} className="button">
                  {review.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Reviews;
