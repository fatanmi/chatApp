import React from "react";
import "./ChatWindow.css";

export default function ChatWindow(): React.ReactElement {
  const currentUser: { username: string; avatar: string } = {
    username: "John Doe",
    avatar: "/img/avatar.png", // Example avatar URL
  };
  return (
    <>
      <div className="top">
        <div className="user">
          <img src={currentUser?.avatar || "/img/avatar.png"} alt="" />
          <div className="text">
            <span>{currentUser?.username || "John Deo"}</span>
            <p className="userDescription">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icon">
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-circle-info"></i>
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <img
              // src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg?q=49&fit=crop&w=943&h=530&dpr=2"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* <div ref={endRef}></div> */}
      </div>
      <div className="bottom">
        {/* <EmojiPicker open={open} onEmojiClick={handleEmoji} /> */}
        <div className="emoji">
          <i
            className="far fa-smile"
            // <!-- onClick={() => setOpen((prev) => !prev)} -->
          ></i>
        </div>
        <input
          className="InputMessage"
          type=""
          // value={text}
          placeholder="Type a message..."
          // onChange={(e) => setText(e.target.value)}
        />
        <div className="mic">
          <i className="fa-solid fa-microphone"></i>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </>
  );
}
