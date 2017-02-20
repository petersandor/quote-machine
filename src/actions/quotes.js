import 'whatwg-fetch';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';

const CHURK_NORRIS_API = 'https://api.icndb.com/jokes/random?escape=javascript';

export const getNewQuote = () => dispatch => {
  dispatch({
    type: 'FETCH_QUOTE_START',
    time: Date.now(),
    isLoading: true
  });

  return fetch(CHURK_NORRIS_API)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: 'FETCH_QUOTE_SUCCESS',
        response
      });
    })
    .catch(error => {
      dispatch({
        type: 'FETCH_QUOTE_ERROR',
        error
      });
    });
};
