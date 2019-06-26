import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getIncidentTotalsAction from '../../actions/incidentTotalsActions';
import RedFlagCard from './RedFlagCard'
import InterventionCard from './InterventionCard'

import '../../../css/style.css';


class Cards extends Component {

    componentDidMount() {
        //get totals
        const { getIncidentTotalsAction } = this.props;
        getIncidentTotalsAction();
    }

    render() {
        return (
            <div className="cards">

                <RedFlagCard
                    totals={this.props.redflagTotals}
                />

                <InterventionCard
                    totals={this.props.interventionTotals}
                />

            </div>
        );
    }

}
Cards.propTypes = {
    getIncidentTotalsAction: PropTypes.func,
}

const mapStateToProps = state => state.incidentTotalsReducer;

export default connect(mapStateToProps, { getIncidentTotalsAction })(Cards);