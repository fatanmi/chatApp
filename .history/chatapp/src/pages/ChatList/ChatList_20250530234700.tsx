import React from "react";
import "./ChatList.css";

export default function ChatList(): React.ReactElement {
  return (
    <>
      <div className="chatList">
        <div className="chatListHeader">
          <h1>WhatsApp</h1>
        </div>
        <div className="chatListItems">
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="LastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">Chat 2</div>
          <div className="chatListItem">Chat 3</div>
        </div>
      </div>
    </>
  );
}
