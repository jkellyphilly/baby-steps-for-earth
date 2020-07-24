import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanList from '../components/PlanList';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class PlansPage extends Component {

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to the community</h1>
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
    plans: state.plans
  }
}

export default connect(mapStateToProps)(PlansPage)
