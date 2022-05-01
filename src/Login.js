import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const register = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login__container">
      <h1>Sign in</h1>
      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign in
        </button>
      </form>
      <p className="login__conditionsMessage">
        By signing in you abide by the Terms and Conditions of Milton Keynes
        City Football Club.
      </p>
      <button onClick={register} className="login__registerButton">
        Create an MKCFC account
      </button>
    </div>
  );
}

export default Login;
