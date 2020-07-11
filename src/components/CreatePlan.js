import React, { Component } from 'react';

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
    e.preventDefault();
    this.props.createNewPlan(info);
  }

  render() {
    return (
      <div className="create-new-plan">
        <form onSubmit={(e) => {
          this.handleSubmit(e, this.state);
          this.setState({ username: "" })
          }
        }>
          <label>
            Enter your name:
          </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <input type="submit" value="Create my plan!" />
        </form>
      </div>
    )
  }
}

export default CreatePlan
