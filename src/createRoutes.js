import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import * as containers from './containers';


const {
  CounterPage,
  QuotePage,
  NotFoundPage,
} = containers;

const createRoutes = store => ( // eslint-disable-line no-unused-vars
  <Route component={App}>
    <Route path="/" component={QuotePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
