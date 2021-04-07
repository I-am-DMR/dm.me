import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cv from "../components/cv";
import Home from "../components/home";
import Blog from "./blog/blog";
import Coffee from "../components/coffee/coffee"
export default function nav() {
  return (
    <div className="">
      <nav
        style={{ overflow: "hidden" }}
        className="navbar navbar-light container navbar-expand-md navigation-clean-button stick"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </a>
            <Link className="navbar-brand" to="/blog">
              Blog
            </Link>

          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" />
              <li className="nav-item">
                <Link className="nav-link" to="/cv">
                  CV
                </Link>
              </li>
            </ul>
            {/* <span className="navbar-text actions">
            {" "}
            <a className="login" href="#">
              Log In
            </a>
            <a className="btn btn-light action-button" role="button" href="#">
              Sign Up
            </a>
          </span> */}
          </div>
          

        </div>
        <Coffee/>

      </nav>
      <Switch>
        <Route exact path="/cv">
          <Cv />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}
