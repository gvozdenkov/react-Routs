import React from "react";
import "../components/Header.css";
import NavBar from "./NavBar";
import ThemeSelect from "./ThemeSelect";
import ThemeIcon from "./ThemeIcon";

function Header({ themeChange }) {
  return (
    <header className="header page__section">
      <h2 className="header__title">🤔 Emoji Critic</h2>
      <ThemeSelect onChange={themeChange} />
      <ThemeIcon />
      <NavBar />
    </header>
  );
}

export default Header;
