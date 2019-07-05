import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormatDate from '../../utilities';
import getInterventionAction from '../../actions/interventionActions';
import '../../../css/style.css';


class InterventionTable extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault()
        this.props.history.push({
            pathname: '/incident',
            state: { type: 'intervention' }
        })
    }

    componentWillMount() {
        const { getInterventionAction } = this.props;
        getInterventionAction();
    };

    render() {
        return (
            <div className="intervention-table" >

                <label className="table-header intervention">
                    My interventions
                    <div
                        onClick={this.handleClick}
                        role="button"
                        className="button-add"
                    />
                </label>

                <table id="intervention-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.interventions.map(i => (
                                <tr key={i.id}>
                                    <td>{FormatDate(i.createdon)}</td>
                                    <td>{i.title}</td>
                                    <td>{i.status}</td>
                                    <td><a href="" >Edit</a> | <a href="" >Delete</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
InterventionTable.propTypes = {
    getInterventionAction: PropTypes.func,
}

const mapStateToProps = state => state.interventions;

export default connect(mapStateToProps, { getInterventionAction })(InterventionTable)
