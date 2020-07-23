import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
      <Container>
        <Form inline onSubmit={(e) => {
          this.handleSubmit(e, this.state.searchTerm);
          this.setState({
            searchTerm: ""
          })
        }}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="filter: e.g. vegan, energy"
              style={{width: "auto"}}
              value={this.state.searchTerm}
              onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default GoalSearch
