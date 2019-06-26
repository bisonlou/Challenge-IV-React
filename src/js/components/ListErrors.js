import React from 'react';

const ListErrors = props => {
    const { errors } = props;

    return (
        <div className="error-box" id="error-box">
            {
                errors.map(error => <p key={error}>{error}</p>)
            }
        </div>
    )
};

export default ListErrors;