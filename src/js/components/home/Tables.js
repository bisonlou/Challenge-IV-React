import React from 'react'
import RedFlagTable from './RedFlagTable'
import InterventionTable from './InterventionTable'
import '../../../css/style.css';


const Tables = () => {
    return (
        <div className="container">
            <div className="tables">
                <RedFlagTable />
                <InterventionTable ß/>
            </div>
        </div>
    );
}



export default Tables