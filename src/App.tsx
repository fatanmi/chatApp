import React, { ReactElement } from "react";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from "./components/detail/login/Login";
import Notification from "./components/detail/notification/Notification";

function App(): ReactElement {
  const user: boolean = false;
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
