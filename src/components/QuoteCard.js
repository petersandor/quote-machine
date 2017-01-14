import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import FlatButton from 'material-ui/FlatButton';

const cardStyles = {
  maxWidth: 900
};

const headerStyles = {
  textAlign: 'right',
  margin: '0 auto'
};

const QuoteCard = props => (
  <Card style={cardStyles}>
    <CardText>
      <FormatQuote />
      {props.text}
    </CardText>
    <CardHeader
      title={props.author}
      style={headerStyles}
    />
    <CardActions>
      <FlatButton
        primary
        label="Tweet"
        onTouchTap={props.onTweetClick}
      />
      <FlatButton
        secondary
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
