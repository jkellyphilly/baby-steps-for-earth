import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalList from '../components/GoalList';
import { createPlan } from '../actions/babyStepsActions';
import CreatePlan from '../components/CreatePlan';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
      <div className="profile-page">
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to your profile!</h1>
            <p>
              Here you will find the goals which you have added to your plan. Once you have seven (enough for one week), you can submit your plan to our online community!
            </p>
          </Container>
        </Jumbotron>
        <h3>Your current goals</h3>
        <div className="my-goals-list">
          <GoalList
            goals={this.props.myGoals}
            buttonFunction={this.props.removePlanFromMyPlan}
            path={this.props.match.path}/>
        </div>
        <br/>
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
    createPlan: (info) => dispatch(createPlan(info)),
    removePlanFromMyPlan: (goal) => dispatch({ type: 'REMOVE_GOAL_FROM_MY_PLAN', goal})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
