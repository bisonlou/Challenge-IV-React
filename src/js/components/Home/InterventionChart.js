import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// styles
import '../../../css/style.css';
import '../../../css/graph.css';

const InterventionChart = (props) => {
  const { totals } = props;
  const {
    pending,
    rejected,
    resolved,
    investigation,
    total,
  } = totals;
  return (
    <ul className="chart">
      <li>
        <span
          className="intervention"
          id="pending-interventions"
          title="Pending"
          style={
            { height: (pending * 100) / (total === 0 ? 1 : total) }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="investigation-interventions"
          title="Investigating"
          style={
            { height: (investigation * 100) / (total === 0 ? 1 : total) }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="resolved-interventions"
          title="Resolved"
          style={
            { height: (resolved * 100) / (total === 0 ? 1 : total) }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="rejected-interventions"
          title="Rejected"
          style={
            { height: (rejected * 100) / (total === 0 ? 1 : total) }
          }
        />
      </li>
    </ul>
  );
};

InterventionChart.propTypes = {
  totals: PropTypes.shape({
    pending: PropTypes.number.isRequired,
    rejected: PropTypes.number.isRequired,
    resolved: PropTypes.number.isRequired,
    investigation: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};


export default InterventionChart;
