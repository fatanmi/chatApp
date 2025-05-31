import React from "react";
import ChatWindow from "../Chat-Window/ChatWindow";
import "./Chat.css";
import ChatList from "../ChatList/ChatList";

export default function Chat(): React.ReactElement {
  return (
    <>
      <div className="container">
        <div className="mainControl"></div>
        <ChatList />
        <div className="chatWindow"></div>
        {/* <div> hello</div> */}
        {/* <div className="chat-list"></div> */}
        {/* <ChatWindow /> */}
      </div>
    </>
  );
}
