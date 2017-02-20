import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Quote from '../components/Quote';
import * as QuoteActions from '../actions/quotes';


const mapStateToProps = state => ({
  quote: state.quotes,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(QuoteActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Quote);
