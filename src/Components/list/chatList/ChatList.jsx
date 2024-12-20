import React, { useState } from "react";
import "./chatList.css";

function ChatList() {
  const [addMode, setAddMode] = useState(false);
  return (
    <div>
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            <img src="/search.png" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <div className="add">
            <img
              src={addMode ? "/minus.png" : "/plus.png"}
              alt=""
              onClick={() => setAddMode((prev) => !prev)}
            />
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="item">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Deo</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
