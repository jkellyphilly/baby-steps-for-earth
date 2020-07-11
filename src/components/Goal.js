import React, { Component } from 'react';
import Tags from './Tags';

class Goal extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.addGoalToMyPlan(this.props.goal);
  }

  renderBtn = (path) => {
    if (path === '/explore') {
      return (
        <button onClick={this.handleClick}>
          Add to your plan!
        </button>
      )
    }
  }

  render() {
    return (
      <div className="goal" data-id={this.props.goal.id}>
        <p>{this.props.goal.attributes.title}</p>
        <li>{this.props.goal.attributes.content}</li>
        <Tags tags={this.props.goal.attributes.tags}/>
        {this.renderBtn(this.props.path)}
      </div>
    )
  }
}

export default Goal;
