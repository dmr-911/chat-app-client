import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>User</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
