import React from "react";
import "../components/Header.css";
import NavBar from "./NavBar";
import ThemeSelect from "./ThemeSelect";
import ThemeIcon from "./ThemeIcon";
import LangSelect from "./LangSelect";

function Header({ themeChange, langChange }) {
  return (
    <header className="header page__section">
      <h2 className="header__title">🤔 Emoji Critic</h2>
      <ThemeSelect onChange={themeChange} />
      <ThemeIcon />
      <LangSelect onChange={langChange} />
      <NavBar />
    </header>
  );
}

export default Header;
