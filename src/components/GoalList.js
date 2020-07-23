import React from 'react';
import Goal from './Goal';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

const GoalList = (props) => {
  return (
    <CardColumns>
      <div className="goal-list">
        {props.goals.map(goal => {
          return (
            <div className="col-md-4">
              <Goal
                goal={goal}
                key={goal.id}
                handleSubmit={props.buttonFunction}
                path={props.path}/>
            </div>
          )
        })}
      </div>
    </CardColumns>
  )
}

export default GoalList
