import React from "react";
import { useData } from "../context/AuthContextProvider";
import { useChatData } from "../context/ChatContext";
import { ONLINE_IMAGE } from "../utils/data";

const Message = ({ message }) => {
  const { user } = useData();
  const { data } = useChatData();
  console.log(message);
  return (
    <div className="message owner">
      <div className="message-info">
        <img src={ONLINE_IMAGE} alt="" />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img src={ONLINE_IMAGE} alt="" />
      </div>
    </div>
  );
};

export default Message;
