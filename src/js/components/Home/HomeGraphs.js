import React from 'react';
import Cards from './Cards';

import '../../../css/style.css';

const HomeGraphs = props => (
  <div className="container-wide">
    <Cards {...props} />
  </div>
);

export default HomeGraphs;
