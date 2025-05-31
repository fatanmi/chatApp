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
            <div className="all">h1</div>
            <div className="unread"></div>
            <div className="favorite"></div>
            <div className="groups"></div>
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
