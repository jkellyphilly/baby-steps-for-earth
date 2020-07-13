import React, { Component } from 'react';

const Plan = (props) => {
  return (
    <div className="plan">
      <p>{props.plan.attributes.username}</p>
      {props.plan.attributes.goals.map(goal => {
        return (
          <div className="plan-goals">
            <li>{goal.title}</li>
          </div>
        )
      })}
    </div>
  )
}

export default Plan
