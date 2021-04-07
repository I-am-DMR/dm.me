import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="links">
            <a href="/about">About me</a>
            <a href="/contact">Contact me</a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/devamakeshr">
              <i className="icon ion-social-facebook" />
            </a>
            <a href="https://www.instagram.com/devamakesh.me">
              <i className="icon ion-social-instagram-outline" />
            </a>
            <a href="https://twitter.com/devamakeshr">
              <i className="icon ion-social-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
