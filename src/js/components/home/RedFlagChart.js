import React from 'react'
import '../../../css/style.css';
import '../../../css/graph.css';

const RedFlagChart = (props) => {
    return (
        <ul className="chart">
            <li>
                <span className="redflag" id="pending-redflags" title="Pending" style={
                    { height: (props.totals.pending * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="redflag" id="investigation-redflags" title="Investigating" style={
                    { height: (props.totals.investigation * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="redflag" id="resolved-redflags" title="Resolved" style={
                    { height: (props.totals.resolved * 100) / props.totals.total }
                }></span>
            </li>
            <li>
                <span className="redflag" id="rejected-redflags" title="Rejected" style={
                    { height: (props.totals.rejected * 100) / props.totals.total }
                }></span>
            </li>
        </ul>
    )

}

export default RedFlagChart