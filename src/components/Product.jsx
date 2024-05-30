import React from "react";
import "./Product.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default function Products() {
  return (
    <div>
      <div class="notification-area">
        <div class="container">
          <div class="smart-notification">
            <div class="watch-notification">
              <div class="notification-img">
                <img src="./icons/notification.png" alt="notification" />
              </div>
            </div>
            <div class="watch-notification">
              <div class="notification-content" data-aos="fade-up">
                <h2>Smart Notifications</h2>
                <p>
                  Delay rapid joy share allow age manor six. Went why far saw
                  many knew. Exquisite excellent son gentleman acuteness her.
                </p>
                <ul>
                  <li>Delay rapid joy share allow age manor six.</li>
                  <li>Exquisite excellent son gentleman acuteness her.</li>
                  <li>Went why far saw many knew.</li>
                </ul>
                <a class="buttonfx btn" href="/cart">
                  <i class="icofont-shopping-cart"></i> ORDER NOW
                </a>
              </div>
            </div>
          </div>
          <div class="smart-notification">
            <div class="watch-notification">
              <div class="notification-content" data-aos="fade-right">
                <h2>Improve Your Life Style</h2>
                <p>
                  Delay rapid joy share allow age manor six. Went why far saw
                  many knew. Exquisite excellent son gentleman acuteness her.
                </p>
                <ul>
                  <li>Delay rapid joy share allow age manor six.</li>
                  <li>Exquisite excellent son gentleman acuteness her.</li>
                  <li>Went why far saw many knew.</li>
                </ul>
                <a class="buttonfx btn" href="/cart">
                  ORDER NOW
                </a>
              </div>
            </div>
            <div class="watch-notification">
              <div class="notification-img">
                <img src="./icons/notification.png" alt="notification" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
