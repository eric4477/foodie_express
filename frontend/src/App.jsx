import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <LogIn setShowLogin={setShowLogin} />}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
      </div>
    </>
  );
}

export default App;
