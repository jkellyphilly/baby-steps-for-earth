import React, { Component } from 'react';
import Tags from './Tags';

class Goal extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.goal);
  }

  renderBtn = (path) => {
    const phrasing = path==='/explore' ? "Add to" : "Remove from";
    return (
      <button onClick={this.handleClick}>
        {phrasing} your plan
      </button>
    )
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
