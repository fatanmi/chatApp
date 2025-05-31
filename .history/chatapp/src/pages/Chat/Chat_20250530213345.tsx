import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="container">
        <div className="chat-list"></div>
        <div className="chat-window">
          <div className="chat-header">Chat Header</div>
          <div className="chat-messages">
            <div className="message">Hello, how are you?</div>
            <div className="message">I'm fine, thanks!</div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
      </div>
    </>
  );

