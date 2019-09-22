// react
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import Navbar from '../Navbar';
import HomeGraphs from './HomeGraphs';
import Tables from './Tables';
import {
  resetIsIncidentPosted,
  resetIsIncidentDeleted,
  resetIsIncidentUpdate,
} from '../../actions/incidentActions';

class Home extends Component {
  componentDidMount() {
    const {
      resetIsIncidentPosted: setIncidentPostedFalse,
      resetIsIncidentDeleted: setIncidentDeletedFalse,
      resetIsIncidentUpdate: setIncidentUpdateFalse,
    } = this.props;

    setIncidentPostedFalse();
    setIncidentDeletedFalse();
    setIncidentUpdateFalse();
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <HomeGraphs {...this.props} />
        <Tables {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  resetIsIncidentPosted: PropTypes.func.isRequired,
  resetIsIncidentDeleted: PropTypes.func.isRequired,
  resetIsIncidentUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.incidentReducer;

const actions = {
  resetIsIncidentPosted,
  resetIsIncidentDeleted,
  resetIsIncidentUpdate
};

export default connect(mapStateToProps, actions)(Home);
