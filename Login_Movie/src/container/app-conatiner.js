import { connect } from 'react-redux';
import {App} from '../components/app';
import { fetchSearchData } from '../actions/action';

const mapStateToProps = ({detailedViewReducer}) => ({
  items: detailedViewReducer.items,
});

const mapDispatchToProps = {
  fetchSearchData
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
