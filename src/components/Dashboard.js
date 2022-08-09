import React from "react";
import "../components/Dashboard.css";

function Dashboard({ title, text, children }) {
  return (
    <div className="dashboard">
      <h1
        className={`dashboard__title ${
          !title ? "display-none" : ""
        }`}
      >
        {title}
      </h1>
      <p className="dashboard__text">{text}</p>
      {children}
    </div>
  );
}

export default Dashboard;
