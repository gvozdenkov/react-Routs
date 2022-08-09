import React from "react";
import "../components/Header.css";

function Header({ logo, menuItems }) {
  return (
    <header className="header page__section">
      <h2 className="header__title">{logo}</h2>
      <ul className="nav">
        {menuItems.map((item) => (
          <li>
            <a href="" className="nav__item">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
