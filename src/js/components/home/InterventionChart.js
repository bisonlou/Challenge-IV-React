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
            { height: (pending * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="investigation-interventions"
          title="Investigating"
          style={
            { height: (investigation * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="resolved-interventions"
          title="Resolved"
          style={
            { height: (resolved * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="intervention"
          id="rejected-interventions"
          title="Rejected"
          style={
            { height: (rejected * 100) / total }
          }
        />
      </li>
    </ul>
  );
};

InterventionChart.propTypes = {
  totals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
};

InterventionChart.defaultProps = {
  totals: PropTypes.shape({
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }),
};

export default InterventionChart;
