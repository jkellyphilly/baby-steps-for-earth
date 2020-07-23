import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Goal extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.goal);
  }

  renderBtn = (path) => {
    const phrasing = path==='/explore' ? "Add to" : "Remove from";
    return (
      <Button variant="info" onClick={this.handleClick}>
        {phrasing} your plan
      </Button>
    )
  }

  render() {
    const reducer = (acc, curr) => acc + ' #' + curr.content;
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="text-center">{this.props.goal.attributes.title}</Card.Title>
          <Card.Text>{this.props.goal.attributes.content}</Card.Text>
          {this.renderBtn(this.props.path)}
        </Card.Body>
        <Card.Footer className="text-muted">{this.props.goal.attributes.tags.reduce(reducer, "")}</Card.Footer>
      </Card>
    )
  }
}

export default Goal;
