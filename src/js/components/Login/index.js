import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// styles
import '../../../css/style.css';

// components
import Navbar from '../Navbar';
import ListErrors from '../ListErrors';
import Loader from '../Loader';
import { loginAction } from '../../actions/loginActions';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }
    // create action
    onSubmit(email, password);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { errors, isLoggedIn, isLoading } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        {
          isLoading ? <Loader /> : null
        }
        {
          isLoggedIn ? <Redirect to="/home" /> : null
        }
        <Navbar />
        <div className="container">
          <div className="login-box">
            <p className="heading">Log In</p>
            <p>
              New to iReporter?
              {' '}
              <Link to="/signup">Sign Up</Link>
            </p>

            <ListErrors errors={errors} />

            <label className="error-label" id="email-error" />
            <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} id="email" />

            <label className="error-label" id="password-error" />
            <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} id="password" />

            <div className="submit">
              <input type="submit" id="btn-signup" value="Login" onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.authReducer;

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: (email, password) => loginAction(email, password)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
