import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function Header() {
  const handleScroll = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".header-area").offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header className="header-area">
        <div className="container">
          <div className="row">
            <div className="head">
              <a href="/" onClick={(e) => handleScroll(e, "/")}>
                <img src="./icons/logo-1.png" alt="Logo" />
              </a>
            </div>
            <div className="main">
              <ul className="menu" id="menu">
                <li>
                  <a href="/" onClick={(e) => handleScroll(e, "/")}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleScroll(e, "features")}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    onClick={(e) => handleScroll(e, "product")}
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a href="#video" onClick={(e) => handleScroll(e, "video")}>
                    Video
                  </a>
                </li>
                <li>
                  <a href="#review" onClick={(e) => handleScroll(e, "review")}>
                    Review
                  </a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
