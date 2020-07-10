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
    return (
      <div className="goals">
        <CreateGoal createNewGoal={this.createNewGoal}/>
        <GoalSearch goalSearchSubmit={this.goalSearchSubmit}/>
        <GoalList goals={this.props.goals}/>
      </div>
    )
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
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    createGoal: (info) => dispatch(createGoal(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
