import React from "react";
import { ONLINE_IMAGE } from "../utils/data";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" name="" id="" placeholder="Find user" />
      </div>
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
