import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat app</span>
        <span className="title">Register</span>
        <form>
          <input type="text" name="" id="" placeholder="Enter your name" />
          <input type="email" name="" id="" placeholder="Enter your email" />
          <input type="password" name="" id="" placeholder="Enter password" />
          <label htmlFor="image">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <input type="file" name="" id="image"/>
          <button type="submit">Sign up</button>
        </form>
        <p>
          You have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
