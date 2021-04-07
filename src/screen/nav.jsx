import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cv from "../components/cv";
import Home from "../components/home";
import Blog from "./blog/blog";
import Coffee from "../components/coffee/coffee"
export default function nav() {
  return (
    <div>
      <nav
        style={{ overflow: "hidden" }}
        className="navbar navbar-light  navbar-expand-md navigation-clean-button stick"
      >
         <button
        data-toggle="collapse"
        className="navbar-toggler"
        data-target="#navcol-1"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
        <div className="container">
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" >
            <Link className="nav-link" to="/">
              Home
            </Link></li>
        
         
          <li className="nav-item" >

            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            </li>
         
              <li className="nav-item">
                <Link className="nav-link" to="/cv">
                  CV
                </Link>
              </li>
              
          
            </ul>
            <Coffee/>

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
