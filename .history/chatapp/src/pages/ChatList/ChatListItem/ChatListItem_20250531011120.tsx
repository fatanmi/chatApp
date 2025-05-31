import React from "react";

import "./ChatListItem.css";
export default function ChatListItem(): React.ReactElement {
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
          
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="chatListItem">
            <img src="img/profile.jpg" alt="" />
            <div className="chatListItemDetails">
              <p className="username">John Doe</p>
              <p className="lastMessage">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
