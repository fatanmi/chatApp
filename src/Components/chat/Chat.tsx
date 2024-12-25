import "./chat.css";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

function Chat(): ReactElement {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (emojiData: EmojiClickData) => {
    setText((prev) => prev + emojiData.emoji);
    setOpen(false);
  };
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Naomi Fat</span>
            <p className="userDescription">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icon">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
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
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <img
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg?q=49&fit=crop&w=943&h=530&dpr=2"
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
          <img src="/avatar.png" alt="" />
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
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse ex voluptatum dignissimos eum cum quasi assumenda
              sed deserunt exercitationem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="flex gap-4 justify-between">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input
          className="border-0 outline-none text-black text-wrap text-base bg-white p-3 rounded-[0.5rem] flex-1"
          type=""
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="text"></div>
        <div className="relative">
          <img
            src="/emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="absolute bottom-8">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-[#5183fe] text-white p-[0.7rem] rounded-[0.6rem] outline-none focus:outline-none border-0 cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
}
export default Chat;
