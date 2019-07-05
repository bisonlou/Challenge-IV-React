import React, { Component } from 'react';

// third party components

// components
import Navbar from '../Navbar';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
  }

  redirect(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="landing">

            <div className="left">
              <div className="landing-image" id="protest" />
              <div className="image-caption">
                <p>Gone are the days when you have to make yourself audibly visible so as to garner attention</p>
              </div>
            </div>

            <div className="middle">
              <div className="landing-image" id="loud" />
              <div className="image-caption">
                <p>
                  But you can still make yourself heard lound and clear,
                   provided you have the right tool...
                </p>
              </div>
            </div>

            <div className="right">
              <div className="landing-image" id="evidence" />
              <div className="image-caption">
                <p>
                  ... with just a touch of a button,
                   you could become conspicuous, you could be heard!
                </p>
              </div>
            </div>

          </div>
          <hr className="gradient" />
          <div className="signup-pitch">
            <p className="signup-pitch">
              No more are you powerless to corruption, misuse of power and negligence.
               Introducing iReporter. Sign up today and make your self heard!
            </p>
          </div>
          <div className="signup">
            <button type="button" id="btn-start" onClick={this.redirect}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
