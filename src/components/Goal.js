import React from 'react';
import Tags from './Tags';

const Goal = (props) => {
  return (
    <div className="goal" data-id={props.goal.id}>
      <p>{props.goal.attributes.title}</p>
      <li>{props.goal.attributes.content}</li>
      <Tags tags={props.goal.attributes.tags}/>
    </div>
  )
}

export default Goal;
