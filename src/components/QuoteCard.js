import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import RaisedButton from 'material-ui/RaisedButton';

const cardStyles = {
  maxWidth: 600,
  margin: '0 auto'
};

const headerStyles = {
  margin: '0 auto'
};

const QuoteCard = props => (
  <Card style={cardStyles}>
    <CardHeader
      title={`Quote by ${props.author}`}
      style={headerStyles}
    />
    <CardText>
      <FormatQuote />
      {props.text}
    </CardText>
    <CardActions>
      <RaisedButton
        primary
        label="Tweet"
        onTouchTap={props.onTweetClick}
      />
      <RaisedButton
        label="Show another"
        onTouchTap={props.onGetNewQuote}
      />
    </CardActions>
  </Card>
);

QuoteCard.propTypes = {
  text: React.PropTypes.string,
  author: React.PropTypes.string,
  onTweetClick: React.PropTypes.func,
  onGetNewQuote: React.PropTypes.func
};

export default QuoteCard;
