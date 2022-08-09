import React from "react";
import { Link, NavLink, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "../Dashboard";
import "./AboutMe.css";

function AboutMe() {
  const { path, url } = useRouteMatch();
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <NavLink
            exact
            to={`${url}/my-story`}
            className="button"
            activeClassName="button_active"
          >
            My Story
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/hobbies`}
            className="button"
            activeClassName="button_active"
          >
            My Hobbies
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/contacts`}
            className="button"
            activeClassName="button_active"
          >
            My Contacts
          </NavLink>
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
