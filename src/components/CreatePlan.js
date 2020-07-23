import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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

  handleSubmit = (e, info) => {
    debugger;
    e.preventDefault();
    this.props.createNewPlan(info);
  }

  render() {
    return (
      <div className="create-new-plan" style={{ width: '33rem' }}>
        <Form>
          <Form.Group>
            <Form.Label>Enter your name:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </Form.Group>
          <Button
            variant="primary"
            onClick={(e) => {
              this.handleSubmit(e, this.state)
              this.setState({ username: "" })
            }}>
            Create my plan!
          </Button>
        </Form>
      </div>
    )
  }
}

export default CreatePlan
