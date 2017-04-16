import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Chip from 'material-ui/Chip';

const cardStyles = {
  maxWidth: 600,
  margin: '0 auto',
  position: 'relative'
};

const headerStyles = {
  padding: '16px 16px 0',
  margin: '0 auto'
};

const actionStyles = {
  textAlign: 'right'
};

const refreshStyles = {
  cursor: 'pointer'
};

const categoriesStyle = {
  marginTop: '20px'
};

const QuoteCard = props => (
  <Card style={cardStyles}>
    <CardHeader
      title={'Quote from The Internet Chuck Norris Database'}
      style={headerStyles}
    />
    <CardText>
      <FormatQuote />{props.text}
      {
        props.categories.length ?
          <div style={categoriesStyle}>
            {
              props.categories.map(category => <Chip>{category}</Chip>)
            }
          </div> : null
      }
    </CardText>
    <CardActions style={actionStyles}>
      <RaisedButton
        primary
        label="Tweet"
        onTouchTap={props.onTweetClick}
      />
      <RefreshIndicator
        size={36}
        left={16}
        top={8}
        percentage={props.isLoading ? 0 : 100}
        status={props.isLoading ? 'loading' : 'ready'}
        style={refreshStyles}
        onTouchTap={props.onGetNewQuote}
      />
    </CardActions>
  </Card>
);

QuoteCard.propTypes = {
  isLoading: React.PropTypes.bool,
  text: React.PropTypes.string,
  author: React.PropTypes.string,     // eslint-disable-line
  categories: React.PropTypes.array,
  onTweetClick: React.PropTypes.func,
  onGetNewQuote: React.PropTypes.func
};

export default QuoteCard;
