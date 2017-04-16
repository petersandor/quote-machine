import React, { PropTypes } from 'react';
import querystring from 'querystring';
import Snackbar from 'material-ui/Snackbar';

import QuoteCard from './QuoteCard';

const makeTweetLink = (hashtags, related, text) => {
  const tweetUrl = 'https://twitter.com/intent/tweet';
  const urlParams = {};

  if (hashtags.length) {
    urlParams.hashtags = hashtags.join(',');
  }

  if (related.length) {
    urlParams.related = related.join(',');
  }

  urlParams.text = text;

  return `${tweetUrl}?${querystring.stringify(urlParams)}`;
};

const containerStyles = {
  margin: 15
};

const authorNoticeStyles = {
  textAlign: 'center'
};

class Quote extends React.Component {
  componentWillMount() {
    this.props.getNewQuote();
  }

  onTweetClick = () => {
    const hashtags = ['quotes'];
    const related = ['freecodecamp'];
    const message = this.props.quote.data.joke;
    const maxTweetLength = 140;
    const ourTweetLength = message.length + (hashtags.length * 2) +
      hashtags.join('').length;

    if (ourTweetLength > maxTweetLength) {
      window.alert('Quote too long, can\'t be tweeted!');
      return false;
    }

    window.open(
      makeTweetLink(hashtags, related, message)
    );

    return true;
  };

  render() {
    const { isLoading, isError } = this.props.quote;
    const { joke, categories } = this.props.quote.data;

    return (
      <div style={containerStyles}>
        <QuoteCard
          isLoading={isLoading}
          text={joke}
          onTweetClick={this.onTweetClick}
          onGetNewQuote={this.props.getNewQuote}
          categories={categories}
        />
        <p style={authorNoticeStyles}>
          made with &lt;3 by&nbsp;
          <a href="https://github.com/petersandor">petersandor</a>
        </p>
        <Snackbar
          open={isError}
          className="snackbar"
          action="Retry"
          message="Refresh failed"
          onActionTouchTap={this.props.getNewQuote}
        />
      </div>
    );
  }
}

Quote.propTypes = {
  getNewQuote: PropTypes.func.isRequired,
  quote: PropTypes.object
};

export default Quote;
