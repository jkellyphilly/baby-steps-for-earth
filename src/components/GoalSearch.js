import React, { Component } from 'react';

class GoalSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    this.props.goalSearchSubmit(searchTerm);
  }

  render() {
    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e, this.state.searchTerm);
        this.setState({
          searchTerm: ""
        })
        }
      }>
        <label>
          Enter a tag to filter:
        </label>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type="submit" value="Find Goals" />
      </form>
    )
  }
}

export default GoalSearch
