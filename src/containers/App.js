import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import GoalsPage from './GoalsPage';

class App extends Component {

  render() {
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

export default App;
