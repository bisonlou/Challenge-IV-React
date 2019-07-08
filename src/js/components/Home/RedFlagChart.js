import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// styles
import '../../../css/style.css';
import '../../../css/graph.css';

const RedFlagChart = (props) => {
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
          className="redflag"
          id="pending-redflags"
          title="Pending"
          style={
            { height: (pending * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="redflag"
          id="investigation-redflags"
          title="Investigating"
          style={
            { height: (investigation * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="redflag"
          id="resolved-redflags"
          title="Resolved"
          style={
            { height: (resolved * 100) / total }
          }
        />
      </li>
      <li>
        <span
          className="redflag"
          id="rejected-redflags"
          title="Rejected"
          style={
            { height: (rejected * 100) / total }
          }
        />
      </li>
    </ul>
  );
};

RedFlagChart.propTypes = {
  totals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
};

RedFlagChart.defaultProps = {
  totals: {
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }
};


export default RedFlagChart;
