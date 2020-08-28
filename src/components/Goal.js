import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Goal = (props) => {

  const handleClick = (event, path) => {
    event.preventDefault();
    
    if (path==='/explore') {
      props.addSuccessMessage("Goal added to your profile!");
    }

    props.handleSubmit(props.goal);
  }

  const renderBtn = (path) => {
    const phrasing = path==='/explore' ? "Add to" : "Remove from";
    return (
      <Button variant="info" onClick={(e) => handleClick(e, path)}>
        {phrasing} your plan
      </Button>
    )
  }

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
