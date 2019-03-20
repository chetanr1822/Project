
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import AppContainer from './container/app-conatiner';
import DashboardView from './components/dashboardview';
import {Login} from './components/login';
import {CreateAccount} from './components/createaccount';
import DetailsViewContainer from './container/details-view-container';
import ExploreViewContainer from './container/explore-view-container';
import RatingPage from './components/ratingpage';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} >
    <Route path="/" component={AppContainer}>
      <IndexRoute component = {Login} />
      <Route path="createaccount" component = {CreateAccount} />
      <Route path="dashboardview" component = {DashboardView}>
        <Route path="/detailsview" component = {DetailsViewContainer} />
        <Route path="/exploreview" component = {ExploreViewContainer} />
        <Route path="/ratingpage" component = {RatingPage} />
      </Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
