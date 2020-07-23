import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class GoalSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    this.props.goalSearchSubmit(searchTerm);
  }

  render() {
    return (
      <Form style={{ width: '33rem' }} onSubmit={(e) => {
        this.handleSubmit(e, this.state.searchTerm);
        this.setState({
          searchTerm: ""
        })
      }}>
        <Form.Group controlId="formBasicText">
          <Form.Label>Filter</Form.Label>
          <Form.Control type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default GoalSearch
