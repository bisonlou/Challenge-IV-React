import React from 'react'
import '../../../css/style.css';
import '../../../css/graph.css';

const InterventionChart = (props) => {
    return (
        <ul className="chart">
            <li>
                <span className="intervention" id="pending-interventions" title="Pending" style={
                    { height: (props.totals.pending * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="intervention" id="investigation-interventions" title="Investigating" style={
                    { height: (props.totals.investigation * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="intervention" id="resolved-interventions" title="Resolved" style={
                    { height: (props.totals.resolved * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="intervention" id="rejected-interventions" title="Rejected" style={
                    { height: (props.totals.rejected * 100) / props.totals.total }
                }></span>
            </li>
        </ul>
    )

}

export default InterventionChart