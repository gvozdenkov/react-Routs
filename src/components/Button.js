import React from "react";
import "../components/Button.css";

function Button({ title }) {
  return (
    <div className="button">
      <p className="button__title">{title}</p>
    </div>
  );
}

export default Button;
