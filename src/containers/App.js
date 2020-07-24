import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals, fetchPlans } from '../actions/babyStepsActions';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import GoalsPage from './GoalsPage';
import PlansPage from './PlansPage';
import ProfilePage from './ProfilePage';

class App extends Component {

  componentDidMount() {
    this.props.fetchGoals();
    this.props.fetchPlans();
  }

  render() {
      return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={routerProps => <PlansPage {...routerProps} />}/>
          <Route exact path="/explore" render={routerProps => <GoalsPage {...routerProps}/>}/>
          <Route exact path="/profile" render={routerProps => <ProfilePage {...routerProps}/>}/>
        </div>
      </Router>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    fetchPlans: () => dispatch(fetchPlans())
  }
}

export default connect(null, mapDispatchToProps)(App)
