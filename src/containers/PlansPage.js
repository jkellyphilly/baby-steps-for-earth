import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanList from '../components/PlanList';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class PlansPage extends Component {

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

const mapStateToProps = state => {
  return {
    plans: state.plans,
    username: state.username
  }
}

export default connect(mapStateToProps)(PlansPage)
