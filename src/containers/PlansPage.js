import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanList from '../components/PlanList';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class PlansPage extends Component {

  // Render different welcome greeting based on whether or not
  // Redux store has a username present
  renderWelcome = () => {
    const phrasing = !!this.props.username ? "Welcome to the community, " + this.props.username + "!" : "Welcome to the community!";
    return (
      <h1>{phrasing}</h1>
    )
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            {this.renderWelcome()}
            <p>
              View other members' plans to make baby steps to help the earth!
            </p>
          </Container>
        </Jumbotron>
        <div>
          <PlanList plans={this.props.plans}/>
        </div>
      </div>
    )
  }
}

// Connect these variables from Redux store to this page's props
const mapStateToProps = state => {
  return {
    plans: state.plans,
    username: state.username
  }
}

export default connect(mapStateToProps)(PlansPage)
