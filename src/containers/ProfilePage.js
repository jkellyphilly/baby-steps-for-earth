import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalList from '../components/GoalList';
import { createPlan } from '../actions/babyStepsActions';
import CreatePlan from '../components/CreatePlan';

class ProfilePage extends Component {

  myFunction = (goals) => {
    goals.map(goal => goal.id)
  }

  createNewPlan = (info) => {
    // Only send over the IDs of the current goals
    const newPlan = {
      goals: this.props.myGoals.map(goal => parseInt(goal.id)),
      username: info.username
    }

    this.props.createPlan(newPlan);
  }

  render() {
    console.log("ProfilePage props", this.props);
    return(
      <div>
        <h1>Welcome to your profile.</h1>
        <h3>Your current goals</h3>
        <div className="my-goals-list">
          <GoalList
            goals={this.props.myGoals}
            path={this.props.match.path}/>
        </div>
        <CreatePlan
          createNewPlan={this.createNewPlan}
          goals={this.props.myGoals}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myGoals: state.myGoals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPlan: (info) => dispatch(createPlan(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
