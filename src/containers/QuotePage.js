import React from 'react';
import querystring from 'querystring';
// import wiki from 'wikijs';

import QuoteCard from '../components/QuoteCard';

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

class QuotesPage extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');

    this.setState({
      quoteAuthor: 'N/A',
      quoteText: 'Loading...'
    });

    this.getRandomQuote();
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

  onGetNewQuote = () => {
    console.log('I want new quote');

    this.getRandomQuote();
  };

  getRandomQuote = () => {
    // wiki({
    //   apiUrl: 'https://en.wikiquote.org/w/api.php'
    // }).page('Batman')
    //   .then(console.log)
    //   .catch(err => {
    //     console.error('fetch failed', err);
    //   });

    // The only working API I could find is about Chuck Norris of course
    fetch('https://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(response => {
        if (response.type === 'success') {
          this.setState({
            quoteAuthor: 'Anonymous',
            quoteText: response.value.joke
          });
        }
      });
  };

  render() {
    return (
      <div style={containerStyles}>
        <QuoteCard
          author={this.state.quoteAuthor}
          text={this.state.quoteText}
          onTweetClick={this.onTweetClick}
          onGetNewQuote={this.onGetNewQuote}
        />
      </div>
    );
  }
}


export default QuotesPage;
