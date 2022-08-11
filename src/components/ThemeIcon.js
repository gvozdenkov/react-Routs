import React, { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

function ThemeIcon() {
  const theme = useContext(ThemeContext);
  return <div className="icon">{theme.color === "light" ? "🔆" : "🌙"}</div>;
}

export default ThemeIcon;
