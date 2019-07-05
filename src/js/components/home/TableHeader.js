import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const TableHeader = (props) => {
  const { className, title, onClick } = props;

  return (
    <label className={className}>
      {title}
      <button type="submit" className="button-add" onClick={onClick} />
    </label>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TableHeader;
