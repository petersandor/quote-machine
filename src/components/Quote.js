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

    this.setState({
      quoteAuthor: 'N/A',
      quoteText: 'Loading...'
    });
  }

  onTweetClick = () => {
    const hashtags = ['quotes'];
    const related = ['freecodecamp'];
    const maxTweetLength = 140;
    const ourTweetLength = this.state.quoteText.length + (hashtags.length * 2) +
      hashtags.join('').length;

    if (ourTweetLength > maxTweetLength) {
      window.alert('Quote too long, can\'t be tweeted!');
    } else {
      window.open(
        makeTweetLink(hashtags, related, this.state.quoteText)
      );
    }
  };

  render() {
    const isLoading = this.props.quote.isLoading;
    const { joke, categories } = this.props.quote.data;

    return (
      <div style={containerStyles}>
        <QuoteCard
          isLoading={isLoading}
          author={this.state.quoteAuthor}
          text={joke}
          onTweetClick={this.onTweetClick}
          onGetNewQuote={this.props.getNewQuote}
          categories={categories}
        />
        <p style={authorNoticeStyles}>
          made with &lt;3 by <a href="https://github.com/petersandor">petersandor</a>
        </p>
      </div>
    );
  }
}

Quote.propTypes = {
  getNewQuote: PropTypes.func.isRequired,
  quote: PropTypes.object
};

export default Quote;
