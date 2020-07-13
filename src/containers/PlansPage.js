import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanList from '../components/PlanList';

class PlansPage extends Component {

  render() {
    console.log("PlanPage props", this.props);
    return (
      <div>
        <h1>Welcome to the community!</h1>
        <h3>View other members' plans to make baby steps to help the earth!</h3>
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
