import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat app</span>
        <span className="title">Login</span>
        <form>
          <input type="text" name="" id="" placeholder="Enter your name" />
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button type="submit">Sign in</button>
        </form>
        <p>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
