import React from "react";
import { ToastContainer } from "react-toastify";

function Notification() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        toastClassName={() =>
          "relative flex p-6 mb-4 w-full max-w-xs bg-white rounded-lg shadow text-lg text-gray-800"
        }
      />
    </div>
  );
}

export default Notification;
