import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ThemeIcon from "./ThemeIcon";
import ThemeSelect from "./ThemeSelect";
import { ThemeContext, theme } from "../components/contexts/ThemeContext";

function App() {
  const [color, setColor] = useState("light");
  function handleThemeChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={theme[color]}>
        <ThemeSelect onChange={handleThemeChange} />
        <ThemeIcon />
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
