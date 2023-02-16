import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useData } from "../context/AuthContextProvider";
import { useChatData } from "../context/ChatContext";
import { db } from "../firebase";
import { ONLINE_IMAGE } from "../utils/data";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { user } = useData();
  const { dispatch } = useChatData();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        // console.log("Current data: ", doc.data());
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user.uid && getChats();
  }, [user.uid]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  console.log(Object.entries(chats));

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className="user-chat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img src={chat[1]?.userInfo?.photoURL} alt="" />
              <div className="user-chat-info">
                <span>{chat[1]?.userInfo?.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
