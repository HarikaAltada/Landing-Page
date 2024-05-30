import React from "react";
import "./Details.css";
export default function Details() {
  return (
    <>
      <div className="techinical-area">
        <div className="container">
          <div className="techinical-content">
            <div className="techinical-features">
              <div className="techinical-detail">
                <div className="section-title title">
                  <h2>Modern Technical Specs</h2>
                  <p>
                    Delay rapid joy share allow age manor six. Went why far saw
                    many knew. Exquisite excellent son gentleman acuteness her.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="techinical-features">
            <div className="techinical-card">
              <div className="single-techinical " data-aos="fade-right">
                <img src="./icons/techinical-1.png" alt="proone " />
                <h4>Real-time Heart Rate Monitor</h4>
              </div>
            </div>
            <div className="techinical-card">
              <div className="single-techinical ">
                <img src="./icons/techinical-2.png" alt="proone " />
                <h4>Blood-oxygen Level Monitor</h4>
              </div>
            </div>
            <div className="techinical-card">
              <div className="single-techinical text-center">
                <img src="./icons/techinical-3.png" alt="proone" />
                <h4>Intelligent Activity Tracker</h4>
              </div>
            </div>
            <div className="techinical-card">
              <div className="single-techinical">
                <img src="./icons/techinical-4.png" alt="proone" />
                <h4>Music and Camera Controls</h4>
              </div>
            </div>
          </div>
          <div className="techinical-features">
            <div className="col">
              <img src="./icons/technical-bottom.png" alt="proone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
