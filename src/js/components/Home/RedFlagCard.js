import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// components
import RedFlagChart from './RedFlagChart';

// styles
import '../../../css/style.css';

const RedFlagCard = (props) => {
  const { totals } = props;
  return (
    <div className="card redflag-card">
      <RedFlagChart totals={totals} />
    </div>
  );
};
RedFlagCard.propTypes = {
  totals: PropTypes.shape({
    pending: PropTypes.number,
    rejected: PropTypes.number,
    resolved: PropTypes.number,
    investigation: PropTypes.number,
    total: PropTypes.number,
  }),
};

RedFlagCard.defaultProps = {
  totals: PropTypes.shape({
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  }),
};

export default RedFlagCard;
