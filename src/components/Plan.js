import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Plan = (props) => {
  return (
    <div className="plan">
      <Card border="info" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>{props.plan.attributes.username}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        {props.plan.attributes.goals.map(goal => {
          return (
            <ListGroupItem>{goal.title}</ListGroupItem>
          )
        })}
        </ListGroup>
      </Card>
    </div>
  )
}

export default Plan
