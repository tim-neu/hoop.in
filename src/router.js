//Libs
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/app.js';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App} />
  </Router>
);
export default routes;
