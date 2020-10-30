import React from 'react'

export default function logo() {
    return (
        <div>
              <section
  className="portfolio-block block-intro"
  style={{ color: "rgb(58,171,165)", borderColor: "rgba(86,181,176,0)" }}
>
  <div
    className="rubberBand animated avatar"
    style={{ backgroundImage: 'url("assets/img/avatars/avatar.jpg")' }}
  />
  <div className="container">
    <div className="about-me">
      <p
        style={{
          fontFamily: "ABeeZee, sans-serif",
          borderColor: "rgb(0,0,0)",
          color: "rgb(0,0,0)"
        }}
      >
        Hello! I am DEVA MAKESH. I work as platform developer. I have passion for
        pixel perfect, minimal and easy to use interfaces.
      </p>
      <a
        className="btn btn-outline-primary"
        role="button"
        href="https://www.linkedin.com/in/devamakeshr/"
        style={{
          background: "#eb1b72",
          borderColor: "rgb(255,255,255)",
          color: "rgb(255,255,255)"
        }}
      >
        Hire me
      </a>
    </div>
  </div>
</section>
        </div>
    )
}
