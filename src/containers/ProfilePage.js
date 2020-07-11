import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalList from '../components/GoalList';

class ProfilePage extends Component {

  render() {
    return(
      <div>
        <h1>Welcome to your profile.</h1>
        <h3>Your current goals</h3>
        <div className="my-goals-list">
          <GoalList
            goals={this.props.myGoals}
            path={this.props.match.path}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myGoals: state.myGoals
  }
}

export default connect(mapStateToProps)(ProfilePage)
