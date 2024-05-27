import { useState } from "react";
import "./LogIn.css";
import { IoCloseSharp } from "react-icons/io5";

function LogIn({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-header">
          <h2>{currState}</h2>
          <IoCloseSharp onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create acount" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LogIn;
