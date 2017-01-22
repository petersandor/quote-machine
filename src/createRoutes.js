import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import * as containers from './containers';


const {
  QuotePage,
  NotFoundPage,
} = containers;

const createRoutes = store => ( // eslint-disable-line no-unused-vars
  <Route component={App}>
    <Route path="/" component={QuotePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
