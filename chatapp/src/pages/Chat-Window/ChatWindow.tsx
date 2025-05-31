import React from "react";

export default function ChatWindow(): React.ReactElement {
  return (
    <>
      <div className="container">
        <div className="chat-window">
          <div className="chat-header">Chat Header</div>
          <div className="chat-messages">
            <div className="message">Hello, how are you?</div>
            <div className="message">I'm fine, thanks!</div>
          </div>
      
        </div>
      </div>
    </>
  );
}
