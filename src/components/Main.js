import React from "react";
import { Route, Switch } from "react-router-dom";
import "../components/Main.css";
import AboutMe from "./AboutMe";
import AboutUs from "./AboutUs";
import Button from "./Button";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";

function Main() {
  return (
    <div className="content page__section">
      <Switch>
        <Route exact path="/">
          <Dashboard
            title="Emoji Critic — All about Emojis"
            text="The #1 Destination for Emoji Reviews on the World Wide Web since 2020!"
          />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
