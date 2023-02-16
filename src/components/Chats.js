import React from "react";
import { ONLINE_IMAGE } from "../utils/data";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={ONLINE_IMAGE} alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
