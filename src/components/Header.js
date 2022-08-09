import React from "react";
import "../components/Header.css";

function Header() {
  return (
    <header className="header page__section">
      <h2 className="header__title">🤔 Emoji Critic</h2>
      <ul className="nav">
        <li>
          <a href="" className="nav__item">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav__item">
            Emoji Review
          </a>
        </li>
        <li>
          <a href="" className="nav__item">
            About Me
          </a>
        </li>
        <li>
          <a href="" className="nav__item">
            About Us
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
