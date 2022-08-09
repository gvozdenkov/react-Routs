import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "../Dashboard";
import "./AboutMe.css";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import MyStory from "./MyStory";

function AboutMe() {
  const { path, url } = useRouteMatch();
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to={`${url}/my-story`} className="button">
            My Story
          </Link>
        </li>
        <li>
          <Link to={`${url}/hobbies`} className="button">
            My Hobbies
          </Link>
        </li>
        <li>
          <Link to={`${url}/contacts`} className="button">
            My Contacts
          </Link>
        </li>
      </ul>
      <Route path={`${path}/my-story`}>
        <Dashboard
          title="My Story"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor congue tellus, ut malesuada lectus dignissim at. Phasellus ipsum diam, accumsan a cursus nec, dapibus vitae orci. Sed maximus justo non arcu imperdiet dapibus. Vestibulum vestibulum est vel tempor bibendum. Etiam semper libero et ex ornare consectetur. Quisque eu quam."
        />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Dashboard
          title="My Hobbies"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor congue tellus, ut malesuada lectus dignissim at."
        />
      </Route>
      <Route path={`${path}/contacts`}>
        <Dashboard title="My Contacts" text="">
          <p>gvozdenkov@gmail.com</p>
          <p>+7-925-299-52-28</p>
        </Dashboard>
      </Route>
    </div>
  );
}

export default AboutMe;
