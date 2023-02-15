import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Add from "../images/addAvatar.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat app</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your name"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button type="submit">Sign in</button>
        </form>
        {err && <span>Something went wrong</span>}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
