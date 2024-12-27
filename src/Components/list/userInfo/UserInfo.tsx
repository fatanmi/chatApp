import React, { ReactElement } from "react";
import "./userInfo.css";
import useUserStore from "../../../lib/userStore";
import { onAuthStateChanged, User } from "firebase/auth";

function UserInfo(): ReactElement {
  const { currentUser, isLoading } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser?.avatar || "avatar.png"} alt="" />
        <h4>{currentUser?.username}</h4>
      </div>
      <div className="icon">
        {/* <img src={currentUser?.avatar || "/more.png"} alt="" /> */}
        <img src="/more.png" alt="" />
        <img src="/video.png" alt="" />
        <img src="/edit.png" alt="" />
      </div>
    </div>
  );
}

export default UserInfo;
