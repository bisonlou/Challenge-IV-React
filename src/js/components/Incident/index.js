// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import { Redirect } from 'react-router-dom';

// components
import Loader from '../Loader';
import NavBar from '../Navbar';
import { postIncident, updateIncident } from '../../actions/incidentActions';


class Incident extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: '',
      comment: '',
      lat: 0.000000,
      lng: 0.000000,
      type: '',
      status: 'pending',
    };
  }

  componentDidMount() {
    const { location: { state } } = this.props;
    const {
      type, id, title, comment, status,
    } = state;

    this.setState({
      id, type, title, comment, status,
    });
  }

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleQuillChange = (value) => {
    this.setState({ comment: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { postIncident, updateIncident } = this.props;
    const { id } = this.state;

    id === 0 ? postIncident(this.state) : updateIncident(this.state);
  };

  render() {
    const { title, comment, location } = this.state;
    const { isLoading, isIncidentPosted, isIncidentUpdated } = this.props;

    return (
      <div>
        {
          isLoading && <Loader />
        }
        {
          isIncidentPosted && <Redirect to="/home" />
        }
        {
          isIncidentUpdated && <Redirect to="/home" />
        }
        <NavBar />
        <div className="container">
          <div className="alert-box" id="alert-box">
            <p>Red flag created succesfully</p>
          </div>
          <div className="error-box" id="error-box" />
          <div className="flag-box">
            <div className="left">

              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                placeholder="Title"
                id="title"
              />

              <ReactQuill
                id="quill-editor"
                name="comment"
                value={comment}
                onChange={this.handleQuillChange}
              />

              <input
                type="text"
                name="location"
                value={location}
                onChange={this.handleChange}
                placeholder="Select location"
                id="location"
                disabled
              />

              <div id="map" />
            </div>
            <div className="right">
              <p>Image evidence</p>

              <input
                type="file"
                id="image"
                onChange={this.handleChange}
              />

              <div className="media-table">
                <table id="images-table" />
              </div>

              <p>Video evidence</p>
              <input type="file" disabled />
              <div className="media-table">
                <table id="videos-table" />
              </div>
            </div>
          </div>
        </div>
        <div className="flag-box-submit">

          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Submit"
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.incidentReducer;

Incident.propTypes = {
  postIncident: PropTypes.func,
  updateIncident: PropTypes.func,
  isLoading: PropTypes.bool,
  isIncidentPosted: PropTypes.bool,
  isIncidentUpdated: PropTypes.bool,
  location: PropTypes.shape({
    state: PropTypes.shape({
      type: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      comment: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
      status: PropTypes.string,
    })
  }).isRequired,
};

Incident.defaultProps = {
  postIncident: () => {},
  updateIncident: () => {},
  isLoading: false,
  isIncidentPosted: false,
  isIncidentUpdated: false,
};

export default connect(mapStateToProps, { postIncident, updateIncident })(Incident);
