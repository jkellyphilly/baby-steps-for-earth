import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalList from '../components/GoalList';
import { createPlan } from '../actions/babyStepsActions';
import CreatePlan from '../components/CreatePlan';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class ProfilePage extends Component {

  // TODO: is this being used?!
  myFunction = (goals) => {
    goals.map(goal => goal.id)
  }

  // Given info for creating new plan, make POST to database
  createNewPlan = (info) => {
    // Only send over the IDs of the current goals
    const newPlan = {
      goals: this.props.myGoals.map(goal => parseInt(goal.id)),
      username: info.username
    }

    this.props.createPlan(newPlan);
  }

  // Close the alert message by removing the message
  // from the Redux store
  closeAlert = () => {
    this.props.removeAlertMessage();
  }

  // Render the alert banner with alert message from Redux
  // store if a message is present after adding plan to database
  renderAlert = () => {
    if (!!this.props.alertMessage) {
      return (
        <Container>
          <Alert variant="success">
            <Alert.Heading>{this.props.alertMessage}</Alert.Heading>
            <p>
              Thanks for adding your plan to our community, {this.props.username}!
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
        {this.renderAlert()}
        <Container>
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
        </Container>
      </div>
    )
  }
}

// Connect these variables from Redux store to this page's props
const mapStateToProps = state => {
  return {
    myGoals: state.myGoals,
    alertMessage: state.alertMessageProfile,
    username: state.username
  }
}

// Connect these methods from Redux store to this page's props
const mapDispatchToProps = dispatch => {
  return {
    createPlan: (info) => dispatch(createPlan(info)),
    removePlanFromMyPlan: (goal) => dispatch({ type: 'REMOVE_GOAL_FROM_MY_PLAN', goal}),
    removeAlertMessage: () => dispatch({ type: 'REMOVE_ALERT_MESSAGE_PROFILE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
