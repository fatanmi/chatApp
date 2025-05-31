import React from "react";
import ChatWindow from "../Chat-Window/ChatWindow";

export default function Chat(): React.ReactElement {
  return (
    <>
      <div className="container">
        {/* <div className="chat-list"></div> */}
        <ChatWindow />
      </div>
    </>
  );
}
