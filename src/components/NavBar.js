import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../components/NavBar.css";
import { TranslationContext } from "../components/contexts/TranslationContext";

function NavBar() {
  const lang = useContext(TranslationContext);
  console.log(lang.nav.review);
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
            {lang.nav.home}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            {lang.nav.review}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            {lang.nav.aboutMe}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className="nav__item"
            activeClassName="nav__item_active"
          >
            {lang.nav.aboutUs}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
