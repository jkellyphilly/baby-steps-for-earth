import React, { Component } from 'react';
import Goal from './Goal';

const GoalList = (props) => {

  return (
    <div className="goal-list">
      {props.goals.map(goal => {
        return (
          <Goal
            goal={goal}
            key={goal.id}
            addGoalToMyPlan={props.addGoalToMyPlan}
            path={props.path}/>
        )
      })}
    </div>
  )
}

export default GoalList;
