import React from 'react';
import RedFlagTable from './RedFlagTable';
import InterventionTable from './InterventionTable';
import '../../../css/style.css';


const Tables = props => (
  <div className="container">
    <div className="tables">
      <RedFlagTable {...props} />
      <InterventionTable {...props} />
    </div>
  </div>
);

export default Tables;
