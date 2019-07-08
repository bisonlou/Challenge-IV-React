import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// components
import InterventionChart from './InterventionChart';

// styles
import '../../../css/style.css';

const InterventionCard = (props) => {
  const { totals } = props;
  return (
    <div className="card intervention-card">
      <InterventionChart totals={totals} />
    </div>
  );
};

InterventionCard.propTypes = {
  totals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
};

InterventionCard.defaultProps = {
  totals: PropTypes.shape({
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }),
};

export default InterventionCard;
