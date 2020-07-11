import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals, createGoal } from '../actions/babyStepsActions';
import GoalSearch from '../components/GoalSearch';
import GoalList from '../components/GoalList';
import CreateGoal from '../components/CreateGoal';

class GoalsPage extends Component {

  goalSearchSubmit = (input) => {
    this.props.fetchGoals(input);
  }

  createNewGoal = (info) => {
    this.props.createGoal(info);
  }

  render() {
    console.log("GoalsPage props", this.props);
    return (
      <div className="goals">
        <CreateGoal createNewGoal={this.createNewGoal}/>
        <GoalSearch goalSearchSubmit={this.goalSearchSubmit}/>
        <GoalList
          goals={this.props.goals}
          addGoalToMyPlan={this.props.addGoalToMyPlan}
          path={this.props.match.path}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    goals: state.goals,
    loadingGoals: state.loadingGoals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    createGoal: (info) => dispatch(createGoal(info)),
    addGoalToMyPlan: (goal) => dispatch({ type: 'ADD_GOAL_TO_MY_PLAN', goal})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
