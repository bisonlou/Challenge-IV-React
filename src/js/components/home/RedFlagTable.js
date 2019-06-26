import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getRedFlagsAction from '../../actions/redFlagsActions';
import FormatDate from '../../utilities';
import '../../../css/style.css';


class RedFlagTable extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const { getRedFlagsAction } = this.props;
        getRedFlagsAction();
    }

    render() {
        return (
            <div className="redflag-table">
                <label className="table-header red">
                    My red flags
                    <Link
                        type="submit"
                        className="button-add"
                        to={{
                            pathname: '/incident',
                            state: {
                                type: 'red-flag'
                            }
                        }}
                    />
                </label>

                <table id="redflag-table">
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
                            this.props.redFlags.map(r => (
                                <tr key={r.id}>
                                    <td>
                                        {FormatDate(r.createdon)}
                                    </td>
                                    <td>{r.title}</td>
                                    <td>{r.status}</td>
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

RedFlagTable.propTypes = {
    getRedFlagsAction: PropTypes.func,
}

const mapStateToProps = state => state.redFlags;

export default connect(mapStateToProps, { getRedFlagsAction })(RedFlagTable)
