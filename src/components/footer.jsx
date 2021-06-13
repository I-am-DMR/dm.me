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
            <a href="https://www.linkedin.com/in/devamakeshr">
              <i className="icon ion-social-linkedin" />
            </a>
            <a href="https://www.instagram.com/mrdm.me/">
              <i className="icon ion-social-instagram-outline" />
            </a>
            <a href="https://twitter.com/mrdm_me">
              <i className="icon ion-social-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
