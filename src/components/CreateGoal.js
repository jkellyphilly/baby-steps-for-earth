import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class CreateGoal extends Component {
  // Initialize state of this component
  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
      tags: "",
      showModal: false
    }
  }

  // Maintain input for various keys in state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Create a new goal and close the modal
  handleSubmit = (e, info) => {
    e.preventDefault();
    this.props.createNewGoal(info);
    this.handleClose();
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="create-new-goal">
        <Button variant="primary" onClick={this.handleShow}>
          Create a new goal
        </Button>

        <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Goal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Give your goal a title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  Titles should be short and to the point.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>What's your goal?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  type="textarea"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  name="tags"
                  placeholder="e.g. water conservation, vegan, morning routine"
                  value={this.state.tags}
                  onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  Make sure to separate your tags with commas!
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => {
              this.handleSubmit(e, this.state)
              this.setState({ title: "", content: "", tags: "" })
            }}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CreateGoal
