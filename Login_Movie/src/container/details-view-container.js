import { connect } from 'react-redux';
import DetailsView from '../components/detailsview';
import { fetchSearchData } from '../actions/action';

const mapStateToProps = ({detailedViewReducer}) => ({
  items: detailedViewReducer.items,
});

const mapDispatchToProps = {
  fetchSearchData
};

const DetailsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsView);

export default DetailsViewContainer;
