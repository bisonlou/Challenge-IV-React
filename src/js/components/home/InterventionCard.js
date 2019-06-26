import React from 'react';
import InterventionChart from './InterventionChart';

import '../../../css/style.css';

const InterventionCard = (props) => {
        return (
            <div className="card intervention-card">
                <InterventionChart totals={props.totals}/>
            </div>
        );
    }

export default InterventionCard