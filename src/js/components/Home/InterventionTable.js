// react
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import getInterventionAction from '../../actions/interventionActions';

// helpers
import FormatDate from '../../utilities';

// styles
import '../../../css/style.css';

class InterventionTable extends Component {
  componentWillMount() {
    const { getInterventionAction } = this.props;
    getInterventionAction();
  }

  handleClick = (e) => {
    e.preventDefault();

    const { history: push } = this.props;
    push({
      pathname: '/incident',
      state: { type: 'intervention' }
    });
  }

  render() {
    const { interventions } = this.props;
    return (
      <div className="intervention-table">
        <div className="table-header intervention">
          My interventions
          <div
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            role="button"
            className="button-add"
            tabIndex="0"
          />
        </div>

        <table id="intervention-table">
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
              interventions.map(i => (
                <tr key={i.id}>
                  <td>{FormatDate(i.createdon)}</td>
                  <td>{i.title}</td>
                  <td>{i.status}</td>
                  <td>
                    {
                      i.status !== 'pending'
                        ? <Link to="/edit" id="disabled-link">Edit </Link>
                        : (
                          <Link to={{
                            pathname: '/incident',
                            state: {
                              id: i.id,
                              title: i.title,
                              comment: i.comment,
                              status: i.status,
                              type: 'intervention',
                            }
                          }}
                          >
                            Edit
                          </Link>
                        )
                    }
                    {' | '}
                    {
                      i.status !== 'pending'
                        ? <Link to="/confirm_delete" id="disabled-link">Delete </Link>
                        : (
                          <Link to={{
                            pathname: '/confirm_delete',
                            state: {
                              incidentId: i.id
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
InterventionTable.propTypes = {
  getInterventionAction: PropTypes.func,
  interventions: PropTypes.arrayOf(
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

InterventionTable.defaultProps = {
  getInterventionAction: () => { },
  interventions: [{
    id: 0,
    title: '',
    Comment: '',
  }],
};

const mapStateToProps = state => state.interventions;

export default connect(mapStateToProps, { getInterventionAction })(InterventionTable);
