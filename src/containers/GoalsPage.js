import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals } from '../actions/babyStepsActions';
import GoalSearch from '../components/GoalSearch';
import GoalList from '../components/GoalList';

class GoalsPage extends Component {

  goalSearchSubmit = (input) => {
    this.props.fetchGoals(input);
  }

  render() {
    console.log("Current goals", this.props.goals);
    return (
      <div className="goals">
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
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
