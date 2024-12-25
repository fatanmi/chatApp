import React, { ReactElement } from "react";
import Detail from "./Components/detail/Detail";
import List from "./Components/list/List";
import Chat from "./Components/chat/Chat";
import Login from "./Components/detail/login/Login";
import Notification from "./Components/detail/notification/Notification";

function App(): ReactElement {
  const user: boolean = true;
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
