import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useData } from "../context/AuthContextProvider";
import { db } from "../firebase";
import { ONLINE_IMAGE } from "../utils/data";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { user } = useData();

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

  console.log(Object.entries(chats));

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => {
        console.log(chat);
        const { displayName, photoURL, lastMessage } = chat[1].userInfo;
        return (
          <div className="user-chat" key={chat[0]}>
            <img src={photoURL} alt="" />
            <div className="user-chat-info">
              <span>{displayName}</span>
              <p>{lastMessage?.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
