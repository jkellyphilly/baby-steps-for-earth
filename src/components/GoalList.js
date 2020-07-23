import React from 'react';
import Goal from './Goal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GoalList = (props) => {
  return (
    <Container>
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
    </Container>
  )
}

export default GoalList
