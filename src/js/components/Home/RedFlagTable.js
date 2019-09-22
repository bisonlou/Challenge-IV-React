// react
import React, { Component } from 'react';

// third party components
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import getRedFlagsAction from '../../actions/redFlagsActions';

// styles
import FormatDate from '../../utilities';


class RedFlagTable extends Component {
  componentWillMount() {
    const { getRedFlagsAction } = this.props;
    getRedFlagsAction();
  }

  handleClick(e) {
    e.preventDefault();

    const { history: push } = this.props;
    push({
      pathname: '/incident',
      state: { type: 'red-flag' }
    });
  }

  render() {
    const { redFlags } = this.props;
    return (
      <div className="redflag-table">
        <div className="table-header red">
          My red flags
          <div
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            role="button"
            className="button-add"
            tabIndex="0"
          />
        </div>

        <table id="redflag-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              redFlags.map(r => (
                <tr key={r.id}>
                  <td>
                    {FormatDate(r.createdon)}
                  </td>
                  <td>{r.title}</td>
                  <td>{r.status}</td>
                  <td>
                    {
                      r.status !== 'pending'
                        ? <Link to="/edit" id="disabled-link">Edit </Link>
                        : (
                          <Link to={{
                            pathname: '/incident',
                            state: {
                              id: r.id,
                              title: r.title,
                              comment: r.comment,
                              status: r.status,
                              type: 'red-flag',
                            }
                          }}
                          >
                            Edit
                          </Link>
                        )
                    }
                    {' | '}
                    {
                      r.status !== 'pending'
                        ? <Link to="/confirm_delete" id="disabled-link">Delete </Link>
                        : (
                          <Link to={{
                            pathname: '/confirm_delete',
                            state: {
                              incidentId: r.id
                            }
                          }}
                          >
                            Delete
                          </Link>
                        )
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

RedFlagTable.propTypes = {
  getRedFlagsAction: PropTypes.func,
  redFlags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      Comment: PropTypes.string,
    })
  ),
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
};

RedFlagTable.defaultProps = {
  getRedFlagsAction: () => { },
  redFlags: [{
    id: 0,
    title: '',
    Comment: '',
  }],
};

const mapStateToProps = state => state.redFlags;

export default connect(mapStateToProps, { getRedFlagsAction })(RedFlagTable);
