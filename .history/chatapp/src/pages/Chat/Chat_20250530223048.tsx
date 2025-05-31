import React from "react";
import ChatWindow from "../Chat-Window/ChatWindow";
import "./Chat.css";

export default function Chat(): React.ReactElement {
  return (
    <>
      <div className="container">
        <div className="mainControl"></div>
        <div className="chatList">
          <div className="chatListHeader">Wh</div>
          <div className="chatListItems">
            <div className="chatListItem">Chat 1</div>
            <div className="chatListItem">Chat 2</div>
            <div className="chatListItem">Chat 3</div>
          </div>
        </div>
        <div className="chatWindow"></div>
        {/* <div> hello</div> */}
        {/* <div className="chat-list"></div> */}
        {/* <ChatWindow /> */}
      </div>
    </>
  );
}
