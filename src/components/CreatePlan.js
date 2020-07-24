import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreatePlan extends Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderSubmitBtn = () => {
    if (this.props.myGoals.length !== 7) {
      return (
        <Button
          variant="primary"
          onClick={(e) => {
            this.handleSubmit(e, this.state)
            this.setState({ username: "" })
          }}
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

  handleSubmit = (e, info) => {
    e.preventDefault();
    this.props.createNewPlan(info);
  }

  render() {
    return (
      <div className="create-new-plan" style={{ width: '33rem' }}>
        <Form>
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

const mapStateToProps = state => {
  return {
    myGoals: state.myGoals
  }
}

export default connect(mapStateToProps)(CreatePlan)
