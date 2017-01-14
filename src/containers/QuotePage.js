import React from 'react';
// import wiki from 'wikijs';

import QuoteCard from '../components/QuoteCard';

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
    console.log('I wanna tweet this');
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
