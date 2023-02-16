import React, { useState } from "react";
import { ONLINE_IMAGE } from "../utils/data";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useData } from "../context/AuthContextProvider";
import { useChatData } from "../context/ChatContext";

const Search = () => {
  const { user } = useData();
  const { dispatch } = useChatData();
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        setSearchedUser(doc.data());
      });
    } catch (err) {
      console.log(err.response);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    console.log("user selected");
    dispatch({ type: "CHANGE_USER", payload: searchedUser });
    // check whether the group(chats in firestore) exists, if not create
    const combinedId =
      user.uid > searchedUser.uid
        ? searchedUser.uid + user.uid
        : user.uid + searchedUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create chat in chat collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chat
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchedUser.uid,
            displayName: searchedUser.displayName,
            photoURL: searchedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        // create user chat
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    // setSearchedUser(null);
    // setUsername("");
  };

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          name=""
          id=""
          placeholder="Find user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {searchedUser && (
        <div className="user-chat" onClick={handleSelect}>
          <img src={searchedUser?.photoURL} alt="" />
          <div className="user-chat-info">
            <span>{searchedUser.displayName}</span>
          </div>
        </div>
      )}

      {err && <span>Something went wrong</span>}
    </div>
  );
};

export default Search;
