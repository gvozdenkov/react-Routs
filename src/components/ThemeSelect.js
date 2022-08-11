import React, { useContext } from "react";
import "./ThemeSelect.css";
import { ThemeContext } from "../components/contexts/ThemeContext";

function ThemeSelect({ onChange }) {
  const theme = useContext(ThemeContext);

  return (
    <select onChange={onChange} className="theme-select">
      <option value="light" className="theme-select__item">
        Ligth {theme.color === "light" && "✅"}
      </option>
      <option value="dark" className="theme-select__item">
        Dark {theme.color === "dark" && "✅"}
      </option>
    </select>
  );
}

export default ThemeSelect;
