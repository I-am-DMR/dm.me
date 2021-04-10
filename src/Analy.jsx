import React,{ useEffect} from 'react'
import ReactGA from 'react-ga'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
  import Blog from'./screen/blog/blog'
  import Home from'./components/home'
  import Cv from'./components/cv'
  import App from'./App'
import Footer from './components/footer';


function Analy() {
    useEffect(() => {
        ReactGA.initialize('G-Q3RZ0EL9V1');
        // To Report Page View 
        ReactGA.pageview("/");
      }, [])
    return (
        <div>
            <App/>
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
      <Footer />

        </div>
    )
}

export default Analy
