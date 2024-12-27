import React, { ReactElement, useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import useUserStore from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function ChatList(): ReactElement {
  interface ChatData {
    id: string;
    lastMessage?: string;
    [key: string]: any;
  }
  const [chat, setChat] = useState<ChatData[]>([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser) return;

    const unsub = onSnapshot(doc(db, "userchats", currentUser?.id), (res) => {
      // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if (res.exists()) {
        // console.log(res.data().chats);
        const chatIds: string[] = res.data().chats || [];
        console.log("ChatIds", chatIds);
        const promises = chatIds.map(async (chatId) => {
          try {
            const docRef = doc(db, "users", chatId);
            const docUserSnap = await getDoc(docRef);
            if (docUserSnap.exists()) {
              const userData = docUserSnap.data();
              console.log({ id: chatId, ...userData });
              return { id: chatId, ...userData };
            } else {
              console.log("Cannot retrieve user information for chats");
            }
          } catch (error) {
            console.error("Error fetching user info:", error);
          }

          const chatData = (await Promise.all(promises)).filter(
            Boolean
          ) as ChatData[];
          console.log("Resolved Chat Data:", chatData);

          setChat(chatData.sort((a, b) => b.updatedAt - a.updateAt));
        });
      }
    });
    return () => unsub();
  }, [currentUser?.id]);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" name="" id="" placeholder="Search" className="" />
        </div>
        <div className="add">
          <img
            src={addMode ? "/minus.png" : "/plus.png"}
            alt=""
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Jane Deo</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
