import React, { ReactElement, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

function ChatList(): ReactElement {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" name="" id="" placeholder="Search" className="" />
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
      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;
