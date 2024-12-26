import React, { ReactElement, useEffect } from "react";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/detail/login/Login";
import Notification from "./components/detail/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

function App(): ReactElement {
  const user: boolean = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {
      console.log(user);
      unSub();
    };
  });
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
