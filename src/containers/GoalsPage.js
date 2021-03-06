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

  // Close the alert message by removing the message
  // from the Redux store
  closeAlert = () => {
    this.props.removeSuccessMessage();
  }

  // Render the alert banner with alert message from Redux
  // store if a message is present after adding goal to plan
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

  render() {
    return (
      <div className="goals">
        <Jumbotron fluid>
          <Container>
            <h1>Explore baby steps</h1>
            <p>
              Here you will find all the goals that have been created on our site. Use the filter below to search for specific goals by tag!
            </p>
            <CreateGoal createNewGoal={this.props.createGoal}/>
          </Container>
        </Jumbotron>
        {this.renderAlert()}
        <GoalSearch
          goalSearchSubmit={this.props.fetchGoals}
          updateCurrentSearchTerm={this.props.updateSearchTerm}
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

// Connect these variables from Redux store to this page's props
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

// Connect these methods from Redux store to this page's props
const mapDispatchToProps = dispatch => {
  return {
    fetchGoals: (input = 'all') => dispatch(fetchGoals(input)),
    createGoal: (info) => dispatch(createGoal(info)),
    addGoalToMyPlan: (goal) => dispatch({ type: 'ADD_GOAL_TO_MY_PLAN', goal}),
    updateSearchTerm: (updatedSearchTerm) => dispatch({ type: 'UPDATE_CURRENT_SEARCH_TERM', updatedSearchTerm}),
    removeSuccessMessage: () => dispatch({ type: 'REMOVE_ALERT_MESSAGE_EXPLORE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage)
