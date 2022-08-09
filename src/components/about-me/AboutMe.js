import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import "./AboutMe.css";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import MyStory from "./MyStory";

function AboutMe() {
  const { path, url } = useRouteMatch();
  return (
    <div>
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
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contacts`}>
        <Contact />
      </Route>
    </div>
  );
}

export default AboutMe;
