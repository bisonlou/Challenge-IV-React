import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';
import PropTypes from 'prop-types';
import getRedFlagsAction from '../../actions/redFlagsActions';
import FormatDate from '../../utilities';
import '../../../css/style.css';


class RedFlagTable extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        history.push({
            pathname: '/incident',
            state: { type: 'red-flag' }
        })
        console.log(this.props);
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
                    <div
                        onClick={this.handleClick}
                        role="button"
                        className="button-add"
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
