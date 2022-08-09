import React from "react";
import "../components/Main.css";
import Button from "./Button";
import Dashboard from "./Dashboard";

function Main() {
  return (
    <div className="content page__section">
      <Dashboard
        title="Emoji Critic — All about Emojis"
        text="The #1 Destination for Emoji Reviews on the World Wide Web since 2020!"
      />
      <Button title="My Story" />
    </div>
  );
}

export default Main;
