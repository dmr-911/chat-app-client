import React from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useChatData } from "../context/ChatContext";

const Chat = () => {
  const { data } = useChatData();
  return (
    <div className="chat">
      <div className="chat-info">
        <span>{data?.user?.displayName}</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
