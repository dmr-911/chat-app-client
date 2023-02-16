import React, { useEffect, useRef } from "react";
import { useData } from "../context/AuthContextProvider";
import { useChatData } from "../context/ChatContext";
import { ONLINE_IMAGE } from "../utils/data";

const Message = ({ message }) => {
  const { user } = useData();
  const { data } = useChatData();

  const messageRef = useRef();

  console.log("user message", data.user);
  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={messageRef}
      className={`message ${message.senderId === user.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === user.uid ? user.photoURL : data.user.photoURL
          }
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>

        <img src={message?.img} alt="" />
      </div>
    </div>
  );
};

export default Message;
