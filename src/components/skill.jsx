import React from "react";

export default function skill() {
  return (
    <div>
      <section
        className="portfolio-block skills"
        style={{ background: "rgba(40,181,225,0.6)" }}
      >
        <div className="container">
          <div className="heading">
            <h2 className="shiniF">Special Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i
                    className="icon ion-ios-star-outline"
                    style={{ background: "rgb(222,27,27)" }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Design</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ background: "rgba(0,0,0,0)" }}>
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i
                    className="icon ion-ios-lightbulb-outline"
                    style={{ background: "rgb(222,166,20)" }}
                  />
                </div>
                <div
                  className="card-body"
                  style={{ background: "rgba(255,97,97,0)" }}
                >
                  <h3 className="card-title">Interface Design</h3>
                  <p className="card-text" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i
                    className="icon ion-ios-gear-outline"
                    style={{ background: "rgb(20,222,149)" }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Linux&nbsp;Specialist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center content">
          <h3 className="shiniF">Like what you see?</h3>
          <button
            className="btn btn-outline-primary btn-lg"
            type="button"
            style={{
              borderColor: "rgb(233,248,59)",
              color: "rgb(23,23,23)",
              background: "#f7f4f4"
            }}
          >
            Hire me
          </button>
        </div>
      </section>
    </div>
  );
}
