// react
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../ListErrors';
import Navbar from '../Navbar';
import Loader from '../Loader';

// action creators
import signupAction from '../../actions/signupActions';

// styles
import '../../../css/style.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        phonenumber: '',
        password: '',
        othernames: '',
        confirmPassword: ''
      },
      isPasswordMatchError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { user } = this.state;
    const { user: { password, confirmPassword } } = this.state;

    if (password !== confirmPassword) {
      this.setState({ isPasswordMatchError: true });
    } else {
      this.setState({ isPasswordMatchError: false });
      onSubmit(user);
    }
  }

  handleChange(e) {
    const { user } = { ...this.state };
    const currentState = user;
    const { name, value } = e.target;
    currentState[name] = value;

    this.setState({ user: currentState });
  }

  render() {
    const { user } = this.state;
    const {
      password,
      confirmPassword,
      email,
      username,
      phonenumber,
      firstname,
      lastname,
      othernames
    } = user;
    const { isPasswordMatchError } = this.state;
    const {
      errors, isLoggedIn, isLoading, isLoginFailed
    } = this.props;

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
          <div className="register-box">
            <div className="left-panel">
              <p>Sign Up</p>
            </div>
            <div className="right-panel">
              {
                isLoading ? <Loader /> : null
              }
              {
                isLoginFailed && errors && <ListErrors errors={errors} />
              }
              <label className="error-label" id="username-error" />
              <input type="text" placeholder="Username" name="username" value={username} id="username" onChange={this.handleChange} required />

              <label className="error-label" id="email-error" />
              <input type="email" placeholder="Email" name="email" value={email} id="email" onChange={this.handleChange} required />

              <label className="error-label" id="firstname-error" />
              <input type="text" placeholder="First Name" name="firstname" value={firstname} id="firstname" onChange={this.handleChange} required />

              <label className="error-label" id="lastname-error" />
              <input type="text" placeholder="Last Name" name="lastname" value={lastname} id="lastname" onChange={this.handleChange} required />

              <input type="text" placeholder="Other Names" name="othernames" value={othernames} id="othernames" onChange={this.handleChange} />

              <label className="error-label" id="phonenumber-error" />
              <input type="tel" placeholder="Phone Number" name="phonenumber" value={phonenumber} id="phonenumber" onChange={this.handleChange} required />

              <label className="error-label" id="password-error" />
              <input type="password" placeholder="Password" name="password" value={password} id="password" onChange={this.handleChange} required />
              {
                isPasswordMatchError && <label className="error-label" id="confirm_password-error">Passwords do not match</label>
              }

              <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} id="confirm_password" onChange={this.handleChange} required />


              <div className="btn-group-register">
                <div className="btn-1">
                  <input type="submit" id="btn-cancel" value="Back" />
                </div>
                <div className="btn-2">
                  <input type="submit" onClick={this.handleSubmit} id="btn-signup" value="Sign Up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoginFailed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.authReducer;

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: user => signupAction(user),
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
