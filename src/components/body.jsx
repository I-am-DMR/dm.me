import React from 'react'

export default function Body() {
    return (
        <div>
           <main className="page lanidng-page">
  <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
    <div className="container">
      <a className="navbar-brand" href="#">
        Deva Makesh
      </a>
      <button
        data-toggle="collapse"
        className="navbar-toggler"
        data-target="#navcol-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item" />
          <li className="nav-item">
            <a className="nav-link" href="cv.html">
              CV
            </a>
          </li>
        </ul>
        <span className="navbar-text actions">
          {" "}
          <a className="login" href="#">
            Log In
          </a>
          <a className="btn btn-light action-button" role="button" href="#">
            Sign Up
          </a>
        </span>
      </div>
    </div>
  </nav>
  <section className="portfolio-block block-intro">
    <div
      className="avatar"
      style={{ backgroundImage: 'url("assets/img/avatars/avatar.jpg")' }}
    />
    <div className="container">
      <div className="about-me">
        <p>
          Hello! I am DEVA MAKEH. I work as platform developer. I have passion
          for pixel perfect, minimal and easy to use interfaces.
        </p>
        <a className="btn btn-outline-primary" role="button" href="#">
          Hire me
        </a>
      </div>
    </div>
  </section>
  <section className="portfolio-block photography">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-6 col-lg-4 item zoom-on-hover">
          <a href="#">
            <img
              className="img-fluid image"
              src="assets/img/nature/IMG_0765.png"
            />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 item zoom-on-hover">
          <a href="#">
            <img
              className="img-fluid image"
              src="assets/img/nature/IMG_5175.jpg"
            />
          </a>
        </div>
        <div className="col-md-6 col-lg-4 item zoom-on-hover">
          <a href="#">
            <img
              className="img-fluid image"
              src="assets/img/tech/IMG_5176.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="portfolio-block call-to-action border-bottom">
    <div className="container">
      <div className="d-flex justify-content-center align-items-center content">
        <h3>Like what you see?</h3>
        <button className="btn btn-outline-primary btn-lg" type="button">
          Hire me
        </button>
      </div>
    </div>
  </section>
  <section className="portfolio-block skills">
    <div className="container">
      <div className="heading">
        <h2>Special Skills</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-ios-star-outline" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Web Design</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-ios-lightbulb-outline" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Interface Design</h3>
              <p className="card-text" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
              <i className="icon ion-ios-gear-outline" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Linux Specialist</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


        </div>
    )
}
