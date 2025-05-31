import React from "react";
import "./ChatList.css";

export default function ChatList(): React.ReactElement {
  return (
    <>
      <div className="chatList">
        <div className="chatListHeader">
          <h1>WhatsApp</h1>
          <input
            className="searchbar"
            type="text"
            placeholder="Search or start a new chat"
          />
          <div className="filter">
            <div className="all filter-name">
              <div>All</div>
            </div>
            <div className="unread filter-name">
              <span>Unread</span>
            </div>
            <div className="favorite filter-name">
              <span>Favorite</span>
            </div>
            <div className="groups filter-name">
              <span>Groups</span>
            </div>
          </div>
        </div>
        <div className="chatListItems">
          
        </div>
      </div>
    </>
  );
}
