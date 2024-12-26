import React, { ReactElement, useEffect, useState } from "react";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/detail/login/Login";
import Notification from "./components/detail/notification/Notification";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./lib/firebase";
import useUserStore from "./lib/userStore";

function App(): ReactElement {
  const [user, setUser] = useState<User | null>(null);
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  if (isLoading) {
    <div>Loading</div>;
  }
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        fetchUserInfo(authUser?.uid);
      } else {
        setUser(null);
      }
    });
    return () => {
      console.log(user);
      unSub();
    };
  }, [fetchUserInfo]);
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
