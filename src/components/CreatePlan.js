import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreatePlan extends Component {
  // Initialize state of this component
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  // Maintain input for various keys in state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Only render the submit button as active if
  // the number of myGoals in the Redux store is 7
  renderSubmitBtn = () => {
    if (this.props.myGoals.length !== 7) {
      return (
        <Button
          variant="primary"
          disabled >
          Create my plan!
        </Button>
      )
    } else {
      return (
        <Button
          variant="primary"
          onClick={(e) => {
            this.handleSubmit(e, this.state)
            this.setState({ username: "" })
          }}
          active >
          Create my plan!
        </Button>
      )
    }
  }

  // If there aren't exactly 7 goals in myGoals from Redux store,
  // instead render a message to the user about how many goals
  // they have in their plan
  renderLabel = () => {
    if (this.props.myGoals.length !== 7) {
      return (
        <Form.Label style={{color: "red"}}>Can only submit a plan with exactly 7 goals! You currently have {this.props.myGoals.length}</Form.Label>
      )
    } else {
      return (
        <Form.Label>Enter your name: </Form.Label>
      )
    }
  }

  // Upon submission, create a new plan
  handleSubmit = (e, info) => {
    e.preventDefault();
    this.props.createNewPlan(info);
  }

  render() {
    return (
      <div className="create-new-plan" style={{ width: '33rem' }}>
        <Form onSubmit={(e) => {
          this.handleSubmit(e, this.state)
          this.setState({ username: "" })
        }}>
          <Form.Group>
            {this.renderLabel()}
            <Form.Control
              type="text"
              name="username"
              placeholder="Your name"
              value={this.state.username}
              onChange={this.handleChange} />
          </Form.Group>
          {this.renderSubmitBtn()}
        </Form>
      </div>
    )
  }
}

// Connect myGoals from Redux store to this component's props
const mapStateToProps = state => {
  return {
    myGoals: state.myGoals
  }
}

export default connect(mapStateToProps)(CreatePlan)
