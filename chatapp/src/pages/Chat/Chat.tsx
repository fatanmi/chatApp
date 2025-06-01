import React from "react";
// import ChatWindow from "../Chat-Window/ChatWindow";
import "./Chat.css";
import ChatList from "../ChatList/ChatList";
import ChatWindow from "../Chat-Window/ChatWindow";

export default function Chat(): React.ReactElement {
  return (
    <>
      <div className="container">
        <div className="mainControl"></div>
        <div className="chatList">
          <ChatList />
        </div>
        <div className="chatWindow"><ChatWindow /></div>
        {/* <div> hello</div> */}
        {/* <div className="chat-list"></div> */}
        {/* <ChatWindow /> */}
      </div>
    </>
  );
}
