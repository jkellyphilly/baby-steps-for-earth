import React from 'react';
import Plan from './Plan';

const PlanList = (props) => {
  return (
    <div className="plan-list">
      {props.plans.map(plan => {
        return (
          <Plan
            plan={plan}
            key={plan.id}
          />
        )
      })}
    </div>
  )
}

export default PlanList
