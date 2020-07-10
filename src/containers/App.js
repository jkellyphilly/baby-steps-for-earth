import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals } from '../actions/babyStepsActions';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import GoalsPage from './GoalsPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  render() {
    console.log("Upon render", this.props);

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Welcome to the community.</div>}/>
          <Route exact path="/explore" render={routerProps => <GoalsPage {...routerProps}/>}/>
          <Route exact path="/profile" render={() => <div>Your Profile</div>}/>
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => {
  return {
    goals: state.goals,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: () => dispatch(fetchGoals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
