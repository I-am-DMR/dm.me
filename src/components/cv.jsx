import React from "react";
import Logo from "./logo";
export default function cv() {
  return (
    <div>
      <Logo />
      <main className="page cv-page">
        <section className="portfolio-block cv">
          <div className="container">
            <div className="work-experience group">
              <div className="heading">
                <h2 className="text-center ">Work Experience</h2>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Full stack developer</h3>
                    <h4 className="organization"> PPTS India Pvt Ltd</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">3/2020 - Till</span>
                  </div>
                </div>
                <p className="text-muted">
                  Starting of my career as a Developer. Till I get more
                  knowledge about web development(angular,node) on going.....
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Software Developer</h3>
                    <h4 className="organization"> My Game Solution</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">12/2020 - 02/2021</span>
                  </div>
                </div>
                <p className="text-muted">
                  Studying, working and volunteering allows a student to develop
                  and refine many skills. I gain knowledge about what is full
                  stack and how is work{" "}
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Platform Developer</h3>
                    <h4 className="organization"> Axyya digital solution</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">11/2020 - 12/2020</span>
                  </div>
                </div>
                <p className="text-muted">
                  Develop some platform for shops and we work B2B config's
                </p>
              </div>

              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Web Developer</h3>
                    <h4 className="organization">Enunui technologies</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">10/2018-03/2019</span>
                  </div>
                </div>
                <p className="text-muted">
                  It is a start-up company. we are working together on a new
                  social media app. Technologies: React.js, Node, MongoDB
                </p>
              </div>
            </div>
            <div className="education group">
              <div className="heading">
                <h2 className="text-center">Education</h2>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Secondary School</h3>
                    <h4 className="organization">Rayar Kalvi Nilayam</h4>
                    <h4 className="organization">81%</h4>
                  </div>
                  <div className="col-6">
                    <span className="period">06/2013 - 04/2014</span>
                  </div>
                </div>
                <p className="text-muted">
                  I have completed my secondary education with 81%. My syllabus
                  is semmancheri in English medium.
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>High School</h3>
                    <h4 className="organization">
                      Bharathi Matriculation Higher Secondary School
                    </h4>
                    <h4 className="organization">65%</h4>
                  </div>
                  <div className="col-6">
                    <span className="period">06/2015 - 04/2016</span>
                  </div>
                </div>
                <p className="text-muted">
                  I think about my high school experience, there are many things
                  that come to mind. Some of them are: good memories, bad
                  memories, mistakes, lessons, happiness, heartbreak,
                  misfortune, joy, drama, and most importantly, fun.
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>B.Sc computer science</h3>
                    <h4 className="organization">Dr.N.G.P College</h4>
                    <h4 className="organization">63%</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">06/2016 - 06/2019</span>
                  </div>
                </div>
                <p className="text-muted">
                  Life at college is the time when the teenage years end and we
                  all dive deep into the ocean of new beginnings and
                  possibilities. This golden period better equips you for all
                  the challenges you’ll face in life and creates a strong
                  foundation of knowledge.
                </p>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-6">
                    <h3>M.Sc computer science</h3>
                    <h4 className="organization">Sri Krishna College</h4>
                    <h4 className="organization">70%</h4>
                  </div>
                  <div className="col-md-6">
                    <span className="period">06/2019 - Till</span>
                  </div>
                </div>
                <p className="text-muted">Fun is On Going.....</p>
              </div>
            </div>
            <div className="group">
              <div className="row">
                <div className="col-md-6">
                  <div className="skills portfolio-info-card">
                    <h2>Skills</h2>
                    <h3>HTML</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        <span className="sr-only">100%</span>
                      </div>
                    </div>
                    <h3>Angular</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        <span className="sr-only">100%</span>
                      </div>
                    </div>
                    <h3>React</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span className="sr-only">90%</span>
                      </div>
                    </div>
                    <h3>Node</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        <span className="sr-only">90%</span>
                      </div>
                    </div>
                    <h3>JavaScript</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "95%" }}
                      >
                        <span className="sr-only">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info portfolio-info-card">
                    <h2>Contact Info</h2>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-android-calendar icon" />
                      </div>
                      <div className="col-9">
                        <span>22/01/1998</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-person icon" />
                      </div>
                      <div className="col-9">
                        <span>Deva Makesh</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-ios-telephone icon" />
                      </div>
                      <div className="col-9">
                        <span>+91 965 522 7714</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-at icon" />
                      </div>
                      <div className="col-9">
                        <span>contact@devamakesh.me</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hobbies group">
              <div className="heading">
                <h2 className="text-center">Hobbies</h2>
              </div>
              <p className="text-center text-muted">
                I love watching movie because every movie that I've ever seen
                have different strories and also the actor. The movie can be
                interesting to watch because of the story and the act of the
                actors and actresses. If you havefriends who love to watch
                movie, you can invite them. Usually I watching movie with my
                friends.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
