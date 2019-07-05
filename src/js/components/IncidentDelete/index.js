import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// components
import NavBar from '../Navbar';
import Loader from '../Loader';

// thunks
import { deleteIncident } from '../../actions/incidentActions';

class DeleteIncident extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incidentId: 0,
      isDeleteCanceled: false,
    };
  }

  componentDidMount() {
    const { history: { location: { state: { incidentId } } } } = this.props;
    this.setState({ incidentId });
  }

  handleDelete = (e) => {
    e.preventDefault();

    const { deleteIncident } = this.props;
    const { incidentId } = this.state;

    deleteIncident(incidentId);
  }

  handleCancel = (e) => {
    e.preventDefault();

    this.setState({ isDeleteCanceled: true });
  }


  render() {
    const { isLoading, isIncidentDeleted } = this.props;
    const { isDeleteCanceled } = this.state;

    return (
      <div>
        <NavBar />
        <div className="container">
          {
            isDeleteCanceled && <Redirect to="/home" />
          }
          {
            isLoading && <Loader />
          }
          {
            isIncidentDeleted && <Redirect to="/home" />
          }
          <div className="delete-box">
            <p>Are you sure you want to delete this incident.</p>
            <hr className="gradient" />
            <div className="btn-group-delete">
              <div className="btn-1">
                <input type="submit" id="btn-signup" value="Oh no!" onClick={this.handleCancel} />
              </div>
              <div className="btn-2">
                <input type="submit" id="btn-cancel" value="Absolutely" onClick={this.handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeleteIncident.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        incidentId: PropTypes.number,
      })
    })
  }).isRequired,
  deleteIncident: PropTypes.func,
  isIncidentDeleted: PropTypes.bool,
  isLoading: PropTypes.bool,
};

DeleteIncident.defaultProps = {
  deleteIncident: () => {},
  isIncidentDeleted: false,
  isLoading: false,
};

const mapStateToProps = state => state.incidentReducer;

export default connect(mapStateToProps, { deleteIncident })(DeleteIncident);
