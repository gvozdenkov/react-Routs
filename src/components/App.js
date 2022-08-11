import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext, theme } from "../components/contexts/ThemeContext";

function App() {
  const [color, setColor] = useState("light");
  
  return (
    <div className="App">
      <ThemeContext.Provider value={theme[color]}>
        <Header themeChange={setColor}/>
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
