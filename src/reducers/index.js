import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import quotes from './quotes';

const rootReducer = combineReducers({
  routing,
  quotes
});


export default rootReducer;
