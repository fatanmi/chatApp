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
              <h2 className="FriendsName">John Doe</h2>
              <h4 className="LastMessage">Lorem ipsum dolor sit.</h4>
            </div>
          </div>
          <div className="chatListItem">Chat 2</div>
          <div className="chatListItem">Chat 3</div>
        </div>
      </div>
    </>
  );
}
