import React from "react";
import ChatWindow from "../Chat-Window/ChatWindow";
import "./Chat.css";

export default function ChatList(): React.ReactElement {
  return (
    <>
      <div className="chatList">
        <div className="chatListHeader">WhatsApp</div>
        <div className="chatListItems">
          <div className="chatListItem">Chat 1</div>
          <div className="chatListItem">Chat 2</div>
          <div className="chatListItem">Chat 3</div>
        </div>
      </div>
    </>
  );
}
