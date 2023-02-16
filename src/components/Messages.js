import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useChatData } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useChatData();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().message);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {messages?.map((message) => {
        return <Message message={message} key={message.id} />;
      })}
    </div>
  );
};

export default Messages;
