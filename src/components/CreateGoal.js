import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';

class CreateGoal extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
      tags: "",
      showModal: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
            <form>
              <label>
                Give your goal a title:
              </label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <br/>
              <label>
                What's your goal??
              </label>
              <input
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <br/>
              <label>
                Enter your tags, separated by commas
              </label>
              <input
                type="text"
                name="tags"
                value={this.state.tags}
                onChange={this.handleChange}
              />
              <br/>
            </form>
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
