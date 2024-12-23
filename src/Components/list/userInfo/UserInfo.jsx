import React from "react";
import "./userInfo.css";

function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h4>Naomi Fat</h4>
      </div>
      <div className="icon">
        <img src="/more.png" alt="" />
        <img src="/video.png" alt="" />
        <img src="/edit.png" alt="" />
      </div>
    </div>
  );
}

export default UserInfo;
