import React, { Component } from 'react';

class CreateGoal extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e, info) => {
    e.preventDefault();
    this.props.createNewGoal(info);
  }

  render() {
    return (
      <div className="create-new-goal">
        <form onSubmit={(e) => {
          this.handleSubmit(e, this.state);
          this.setState({ title: "", content: "" })
          }
        }>
          <label>
            Give your goal a title:
          </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br/>
          <label>
            What's your goal??
          </label>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br/>
          <input type="submit" value="Create New Goal" />
        </form>
      </div>
    )
  }
}

export default CreateGoal
