import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header
        logo="🤔 Emoji Critic"
        menuItems={["Home", "Emoji Reviews", "About Me", "About Us"]}
      />
    </div>
  );
}

export default App;
