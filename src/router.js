//Libs
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home/home_component.js';
import Create from './components/Create/create_component.js';
import Room from './components/Room/room_component.js';

// Routes
const routes = (
  <Router history={browserHistory}>
      <Route path="/home" component={Home} />
      <Route path="/" component={Create} />
      <Route path="/room" component={Room} />
  </Router>
);
export default routes;
