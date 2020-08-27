import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals, createGoal } from '../actions/babyStepsActions';
import GoalSearch from '../components/GoalSearch';
import GoalList from '../components/GoalList';
import CreateGoal from '../components/CreateGoal';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class GoalsPage extends Component {

  goalSearchSubmit = (input) => {
    this.props.fetchGoals(input);
  }

  createNewGoal = (info) => {
    this.props.createGoal(info);
  }

  updateSearchTerm = (newTerm) => {
    console.log("This function is hit");
  }

  render() {
    console.log("Props for the page", this.props)
    return (
      <div className="goals">
        <Jumbotron fluid>
          <Container>
            <h1>Explore baby steps</h1>
            <p>
              Here you will find all the goals that have been created on our site. Use the filter below to search for specific goals by tag!
            </p>
            <CreateGoal createNewGoal={this.createNewGoal}/>
          </Container>
        </Jumbotron>
        <GoalSearch
          goalSearchSubmit={this.goalSearchSubmit}
          updateSearchTerm={this.updateSearchTerm}
          currentSearchTerm={this.props.currentSearchTerm}
        />
        <br/>
        <GoalList
          goals={this.props.goals}
          buttonFunction={this.props.addGoalToMyPlan}
          path={this.props.match.path}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    goals: state.goals,
    loadingGoals: state.loadingGoals,
    currentSearchTerm: state.currentSearchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    createGoal: (info) => dispatch(createGoal(info)),
    addGoalToMyPlan: (goal) => dispatch({ type: 'ADD_GOAL_TO_MY_PLAN', goal})
    // updateSearchTerm: (updatedSearchTerm) => dispatch({ type: 'UPDATE_CURRENT_SEARCH_TERM', updatedSearchTerm})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
