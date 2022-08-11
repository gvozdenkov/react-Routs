import React, { useContext } from "react";
import "./LangSelect.css";
import { TranslationContext } from "../components/contexts/TranslationContext";

function LangSelect({ onChange }) {
  const lang = useContext(TranslationContext);
  function handleLangChange(e) {
    onChange(e.target.value);
  }
  return (
    <select onChange={handleLangChange} className="theme-select">
      <option value="en" className="theme-select__item">
        En
      </option>
      <option value="ru" className="theme-select__item">
        Ru
      </option>
    </select>
  );
}

export default LangSelect;
