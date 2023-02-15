import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { ONLINE_IMAGE } from "../utils/data";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img src={ONLINE_IMAGE} alt="" />
        <span>User</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
