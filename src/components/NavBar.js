import React from "react";
import { NavLink } from "react-router-dom";
import "../components/NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            exact
            to="/"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            Emoji Review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
