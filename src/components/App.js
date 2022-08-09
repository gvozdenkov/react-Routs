import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header
        logo="🤔 Emoji Critic"
        menuItems={["Home", "Emoji Reviews", "About Me", "About Us"]}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
