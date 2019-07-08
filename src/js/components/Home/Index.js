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
  resetIsIncidentDeleted
} from '../../actions/incidentActions';

class Home extends Component {
  componentDidMount() {
    const {
      resetIsIncidentPosted,
      resetIsIncidentDeleted
    } = this.props;

    resetIsIncidentPosted();
    resetIsIncidentDeleted();
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
  resetIsIncidentPosted: PropTypes.func,
  resetIsIncidentDeleted: PropTypes.func,
};

Home.defaultProps = {
  resetIsIncidentPosted: () => { },
  resetIsIncidentDeleted: () => { },
};

const mapStateToProps = states => states.incidentReducer;

export default connect(mapStateToProps, { resetIsIncidentPosted, resetIsIncidentDeleted })(Home);