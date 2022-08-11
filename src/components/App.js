import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext, theme } from "../components/contexts/ThemeContext";
import {
  TranslationContext,
  translation,
} from "../components/contexts/TranslationContext";

function App() {
  const [color, setColor] = useState("light");
  const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <ThemeContext.Provider value={theme[color]}>
        <TranslationContext.Provider value={translation[lang]}>
          <Header themeChange={setColor} langChange={setLang} />
          <Main />
          <Footer />
        </TranslationContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
