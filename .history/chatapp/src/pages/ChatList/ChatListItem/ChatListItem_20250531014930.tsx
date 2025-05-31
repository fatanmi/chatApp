import React from "react";

import "./ChatListItem.css";
export default function ChatListItem(): React.ReactElement {
  return (
    <>
      <div className="chatListItems">
        <img src="img/profile.jpg" alt="" />
        <div className="chatListItemDetails">
          <p className="username">John Doe</p>
          <p className="lastMessage">Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </>
  );
}
