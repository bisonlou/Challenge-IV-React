import React from 'react';
import RedFlagChart from './RedFlagChart';

import '../../../css/style.css';

const RedFlagCard = (props) => {
        return (
            <div className="card redflag-card">
                <RedFlagChart totals={props.totals}/>
            </div>
        );
    }

export default RedFlagCard