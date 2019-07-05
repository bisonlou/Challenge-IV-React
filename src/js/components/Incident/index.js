// react libraries
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// components
import Loader from '../Loader';
import NavBar from '../Navbar';
import { postIncident } from '../../actions/incidentActions';


class Incident extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      comment: '',
      lat: 0.000000,
      lng: 0.000000,
      type: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { type } = this.props.location.state;
    this.setState({ type })
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleQuillChange(value) {
    this.setState({ comment: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postIncident } = this.props;

    postIncident(this.state);
  };

  render() {
    const { title, comment, location } = this.state;
    const { isLoading, isIncidentPosted } = this.props;

    return (
      <div>
        {
          isLoading && <Loader />
        }
        {
          isIncidentPosted && <Redirect to="/home" />
        }
        <NavBar />
        <div className="container">
          <div className="alert-box" id="alert-box">
            <p>Red flag created succesfully</p>
          </div>
          <div className="error-box" id="error-box">
          </div>
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
                <table id="images-table">
                </table>
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
}


export default connect(mapStateToProps, { postIncident })(Incident);
