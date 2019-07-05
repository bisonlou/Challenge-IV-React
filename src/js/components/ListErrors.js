import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

const ListErrors = (props) => {
  const { errors } = props;

  return (
    <div className="error-box" id="error-box">
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
    </div>
  );
};

ListErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListErrors;
