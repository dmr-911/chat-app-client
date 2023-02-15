import React from "react";
import { ONLINE_IMAGE } from "../utils/data";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img src={ONLINE_IMAGE} alt="" />
        <span>User</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
