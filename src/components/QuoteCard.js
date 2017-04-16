import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
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

const categoriesStyle = {
  marginTop: '20px'
};

const Categories = categories => (
 categories.length ?
   <div style={categoriesStyle}>
     { categories.map(category => <Chip>{category}</Chip>) }
   </div> : null
);

const QuoteCard = props => (
  <Card style={cardStyles}>
    <CardHeader
      title={'Quote from The Internet Chuck Norris Database'}
      style={headerStyles}
    />
    <CardText>
      <FormatQuote />{ props.isLoading ? 'Loading...' : props.text }
      <Categories categories={props.categories} />
    </CardText>
    <CardActions>
      <RaisedButton
        primary
        label="Tweet"
        onTouchTap={props.onTweetClick}
      />
      <RaisedButton
        label="Refresh"
        onTouchTap={props.onGetNewQuote}
      />
    </CardActions>
    { props.isLoading ? <LinearProgress mode="indeterminate" /> : false }
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
