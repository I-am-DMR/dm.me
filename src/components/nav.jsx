import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import Cv from './cv'
import Home from './home'
export default function nav() {
    return (
        <div>
 <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
    <div className="container">
      <a className="navbar-brand" href="#">
      <Link className="navbar-brand" to="/">Deva Makesh</Link>
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
            <Link className="nav-link" to="/cv">CV</Link>
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
  </nav>
  <Switch>
        <Route exact path="/cv"><Cv/></Route>
        <Route exact path="/"><Home/></Route>
        </Switch>
        </div>
    )
}
