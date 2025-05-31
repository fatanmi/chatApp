import React from "react";
import Login from "./Login";
import Register from "./register";
import Chat from "./Chat";

export default function Home(): React.ReactElement {
  return (
    <>
      <Chat />
      <Login />;
      <Register />;
    </>
  );
}
