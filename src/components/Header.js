import React from "react";
import "../components/Header.css";
import NavBar from "./NavBar";
import ThemeSelect from "./ThemeSelect";

function Header() {
  return (
    <header className="header page__section">
      <h2 className="header__title">🤔 Emoji Critic</h2>
      <NavBar />
    </header>
  );
}

export default Header;
