import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import withTracker from './helpers/withTracker';
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Route
      component={withTracker(App, {
        /* additional attributes */
      })}
    />
  </BrowserRouter>,
  document.getElementById('root')
);
