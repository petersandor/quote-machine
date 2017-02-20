/* eslint-disable no-unused-vars */
import createReducer from '../utils/createReducer';
import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_ERROR,
  FETCH_QUOTE_SUCCESS
} from '../actions/quotes';

const preloadedState = {
  isLoading: false,
  data: {
    id: null,
    categories: [],
    joke: null
  }
};

const quotes = createReducer(preloadedState, {
  [FETCH_QUOTE_START]: (state, action) => ({
    ...state,
    isLoading: action.isLoading
  }),
  [FETCH_QUOTE_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }),
  [FETCH_QUOTE_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    data: {
      ...action.response.value
    }
  }),
});

export default quotes;
