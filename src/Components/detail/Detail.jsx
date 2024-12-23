import React from "react";

import "./detail.css";

function Details() {
  return (
    <div className="detail">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Naomi Fat</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="/arrowDown.png" alt="" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg?q=49&fit=crop&w=943&h=530&dpr=2"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="downloadIcon" src="/download.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg?q=49&fit=crop&w=943&h=530&dpr=2"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="downloadIcon" src="/download.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/08/some-3d-social-media-icons.jpg?q=49&fit=crop&w=943&h=530&dpr=2"
                alt=""
              />
              <span>photo_2024_2.png</span>
            </div>
            <img className="downloadIcon" src="/download.png" alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
      </div>
      <button>Block user</button>
    </div>
  );
}

export default Details;
