import { connect } from 'react-redux';
import ExploreView from '../components/exploreview';
import { fetchSearchData } from '../actions/action';

const mapStateToProps = ({detailedViewReducer}) => ({
  items: detailedViewReducer.items,
});

const mapDispatchToProps = {
  fetchSearchData
};

const ExploreViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreView);

export default ExploreViewContainer;
