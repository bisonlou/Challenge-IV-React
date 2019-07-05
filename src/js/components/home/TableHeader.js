import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const TableHeader = props => (
  <label className={props.class}>
    {props.title}
    <button type="submit" className="button-add" onClick={props.onClick} />
  </label>
);

TableHeader.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TableHeader;
