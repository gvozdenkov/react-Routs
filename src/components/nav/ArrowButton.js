import React from "react";
import "./ArrowButton.css";

function ArrowButton({ degree }) {
  return (
    <button
      className="arrow-button"
      style={{ transform: `rotate(${degree}deg)` }}
    ></button>
  );
}

export default ArrowButton;
