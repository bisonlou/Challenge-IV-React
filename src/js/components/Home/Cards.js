import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getIncidentTotalsAction from '../../actions/incidentTotalsActions';
import RedFlagCard from './RedFlagCard';
import InterventionCard from './InterventionCard';

import '../../../css/style.css';


class Cards extends Component {
  componentDidMount() {
    const { getIncidentTotalsAction } = this.props;
    getIncidentTotalsAction();
  }

  render() {
    const { redflagTotals, interventionTotals } = this.props;
    return (
      <div className="cards">
        <RedFlagCard
          totals={redflagTotals}
        />
        <InterventionCard
          totals={interventionTotals}
        />
      </div>
    );
  }
}

Cards.propTypes = {
  getIncidentTotalsAction: PropTypes.func,
  redflagTotals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
  interventionTotals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
};

Cards.defaultProps = {
  getIncidentTotalsAction: () => {},
  redflagTotals: PropTypes.shape({
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }),
  interventionTotals: PropTypes.shape({
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }),
};

const mapStateToProps = state => state.incidentTotalsReducer;

export default connect(mapStateToProps, { getIncidentTotalsAction })(Cards);
