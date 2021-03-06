import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Goal = (props) => {

  // Use the function passed down to this Goal
  // to either add or remove this Goal from the
  // current user's plan
  const handleClick = (event, path) => {
    event.preventDefault();
    props.handleSubmit(props.goal);
  }

  // Render the button with different text depending
  // on whether it's being rendered on the explore
  // page or profile page
  const renderBtn = (path) => {
    const phrasing = path==='/explore' ? "Add to" : "Remove from";
    return (
      <Button variant="info" onClick={(e) => handleClick(e, path)}>
        {phrasing} your plan
      </Button>
    )
  }

  // Build a string with the tags with # in front of each one
  const reducer = (acc, curr) => acc + ' #' + curr.content;

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className="text-center">{props.goal.attributes.title}</Card.Title>
        <Card.Text>{props.goal.attributes.content}</Card.Text>
        {renderBtn(props.path)}
      </Card.Body>
      <Card.Footer className="text-muted">{props.goal.attributes.tags.reduce(reducer, "")}</Card.Footer>
    </Card>
  )
}

export default Goal;
