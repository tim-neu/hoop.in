//Libs
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Create from './components/Create';
import Share from './components/Share';
import Join from './components/Join';
import Room from './components/Room';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="create" component={Create} />
      <Route path="join" component={Join} />
      <Route path="share" component={Share}>
        // <IndexRedirect to="html" />
        // <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        // <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        // <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>
      // <Route path="featured/:topic/:name" component={Featured} />
      // <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
export default routes;
