import React from "react";
import "./Video.css";
import { useState } from "react";
export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div id="video" class="video-area">
        <div class="container">
          <div class="video-description">
            <div class="description-area">
              <div class="section-title title">
                <h2>Description With Video</h2>
                <p>
                  Delay rapid joy share allow age manor six. Went why far saw
                  many knew. Exquisite excellent son gentleman acuteness her.
                </p>
              </div>
            </div>
          </div>
          <div class="video-description">
            <div class="description-area">
              <div class="video">
                <img src="./icons/video.jpg" alt="proone" />
                <img
                  src="./icons/play-circle (1).png"
                  className="advertisement"
                  alt=""
                  onClick={handleThumbnailClick}
                  style={{ cursor: "pointer" }}
                />
                {isModalOpen && (
                  <div className="modal-overlay" onClick={handleCloseModal}>
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="close-button" onClick={handleCloseModal}>
                        &times;
                      </span>
                      <iframe
                        width="700"
                        height="400"
                        src="https://www.youtube.com/embed/xK3eJAnQRfI?si=sicAGSlIa5-1vYiv"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
