import React from 'react'

export default function grid() {
    return (
        <div>
            <section
  className="portfolio-block photography"
  style={{ background: "#000000" }}
>
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
          <img className="img-fluid image" src="assets/img/tech/IMG_5176.jpg" />
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
