import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../components/Main.css";
import AboutMe from "./about-me/AboutMe";
import AboutUs from "./AboutUs";
import Button from "./Button";
import Dashboard from "./Dashboard";
import Review from "./Review";
import Reviews from "./Reviews";
import PageNotFound from "./PageNotFound";

function Main() {
  let [reviews, setReviews] = React.useState();

  React.useEffect(() => {
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Error ${res.status}: ${res.statusText}`)
      )
      .then((data) => {
        reviews = Object.values(data);
        setReviews(reviews);
      });
  }, []);

  return (
    <div className="content page__section">
      <Switch>
        <Route exact path="/">
          <Dashboard
            title="Emoji Critic — All about Emojis"
            text="The #1 Destination for Emoji Reviews on the World Wide Web since 2020!"
          >
            <Link to="/reviews">See ALL Reviews</Link>
          </Dashboard>
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews} />
        </Route>
        <Route exact path="/reviews/:id">
          <Review reviews={reviews} />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
