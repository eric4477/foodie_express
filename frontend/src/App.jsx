import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <LogIn setShowLogin={setShowLogin} />}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
