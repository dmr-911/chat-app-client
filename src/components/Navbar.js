import { signOut } from "firebase/auth";
import React from "react";
import { useData } from "../context/AuthContextProvider";
import { auth } from "../firebase";
import { ONLINE_IMAGE } from "../utils/data";

const Navbar = () => {
  const { user } = useData();

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img src={ONLINE_IMAGE} alt="" />
        <span>{user.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
