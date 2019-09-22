import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getIncidentTotalsAction from '../../../actions/incidentTotalsActions';
import RedFlagCard from '../RedFlagCard';
import InterventionCard from '../InterventionCard';

import '../../../../css/style.css';


export class Cards extends Component {
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
  getIncidentTotalsAction: PropTypes.func.isRequired,
  redflagTotals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  interventionTotals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};


const mapStateToProps = state => state.incidentTotalsReducer;

export default connect(mapStateToProps, { getIncidentTotalsAction })(Cards);
