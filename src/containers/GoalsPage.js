import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals } from '../actions/babyStepsActions';
import GoalSearch from '../components/GoalSearch';

class GoalsPage extends Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  goalSearchSubmit = (input) => {
    this.props.fetchGoals(input);
  }

  render() {
    console.log("Current goals", this.props.goals);
    return (
      <div className="goals">
        <GoalSearch goalSearchSubmit={this.goalSearchSubmit}/>
        Hi there!!
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
