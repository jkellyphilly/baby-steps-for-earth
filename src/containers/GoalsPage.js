import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals, createGoal } from '../actions/babyStepsActions';
import GoalSearch from '../components/GoalSearch';
import GoalList from '../components/GoalList';
import CreateGoal from '../components/CreateGoal';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class GoalsPage extends Component {

  goalSearchSubmit = (input) => {
    this.props.fetchGoals(input);
  }

  createNewGoal = (info) => {
    this.props.createGoal(info);
  }

  closeAlert = () => {
    this.props.removeSuccessMessage();
  }

  renderAlert = () => {
    if (!!this.props.alertMessage) {
      return (
        <Container>
          <Alert variant="success">
            <Alert.Heading>{this.props.alertMessage}</Alert.Heading>
            <p>
              Goal added: "{this.props.addedGoal.attributes.title}". You currently have {this.props.myGoals.length} goal(s) in your plan.
            </p>
            <div className="d-flex justify-content-end">
            <Button onClick={this.closeAlert} variant="outline-success">
              Close
            </Button>
          </div>
          </Alert>
        </Container>
      )
    }
  }

  // TODO: can this function be removed and the dispatch
  // just immediately gets passed in...?
  updateSearchTerm = (newTerm) => {
    this.props.updateSearchTerm(newTerm);
  }

  render() {
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
        {this.renderAlert()}
        <GoalSearch
          goalSearchSubmit={this.goalSearchSubmit}
          updateCurrentSearchTerm={this.updateSearchTerm}
          currentSearchTerm={this.props.currentSearchTerm}
        />
        <br/>
        <GoalList
          goals={this.props.goals}
          buttonFunction={this.props.addGoalToMyPlan}
          addSuccessMessage={this.props.addSuccessMessage}
          path={this.props.match.path}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    goals: state.goals,
    loadingGoals: state.loadingGoals,
    currentSearchTerm: state.currentSearchTerm,
    alertMessage: state.alertMessageExplore,
    addedGoal: state.addedGoal,
    myGoals: state.myGoals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    createGoal: (info) => dispatch(createGoal(info)),
    addGoalToMyPlan: (goal) => dispatch({ type: 'ADD_GOAL_TO_MY_PLAN', goal}),
    updateSearchTerm: (updatedSearchTerm) => dispatch({ type: 'UPDATE_CURRENT_SEARCH_TERM', updatedSearchTerm}),
    addSuccessMessage: (message, goal) => dispatch({ type: 'UPDATE_ALERT_MESSAGE_EXPLORE', message, goal}),
    removeSuccessMessage: () => dispatch({ type: 'REMOVE_ALERT_MESSAGE_EXPLORE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
