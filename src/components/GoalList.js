import React, { Component } from 'react';

class GoalList extends Component {

  render() {
    return (
      <div className="goal-list">
        {this.props.goals.map(goal => {
          return (
            <div className="goal">
              <p>{goal.attributes.title}</p>
              <li>{goal.attributes.content}</li>
            </div>
          )
        })
        }
      </div>
    )
  }

}

export default GoalList
