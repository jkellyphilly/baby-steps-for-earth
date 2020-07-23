import React from 'react';
import Plan from './Plan';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

const PlanList = (props) => {
  return (
    <div className="plan-list">
      <Container>
        <CardColumns>
          {props.plans.map(plan => {
            return (
              <Plan
                plan={plan}
                key={plan.id}
              />
            )
          })}
        </CardColumns>
      </Container>
    </div>
  )
}

export default PlanList
