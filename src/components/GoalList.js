import React from 'react';
import Goal from './Goal';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

const GoalList = (props) => {
  return (
    <Container>
      <CardColumns>
        <div className="goal-list">
          {props.goals.map(goal => {
            return (
              <div className="col-md-4">
                <Goal
                  goal={goal}
                  key={goal.id}
                  handleSubmit={props.buttonFunction}
                  addSuccessMessage={props.addSuccessMessage}
                  path={props.path}/>
              </div>
            )
          })}
        </div>
      </CardColumns>
    </Container>
  )
}

export default GoalList
