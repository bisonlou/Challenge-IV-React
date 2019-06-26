import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormatDate from '../../utilities';
import getInterventionAction from '../../actions/interventionActions';
import '../../../css/style.css';


class InterventionTable extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        const { getInterventionAction } = this.props;
        getInterventionAction();
    };

    render() {
        return (
            <div className="intervention-table" >

                <label className="table-header intervention">
                    My interventions
                    <Link
                        type="submit"clear
                        className="button-add"
                        to={{
                            pathname: '/incident',
                            state: {
                                type: 'intervention'
                            }
                        }}
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
