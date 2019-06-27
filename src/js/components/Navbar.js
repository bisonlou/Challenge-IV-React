// react
import React, { Component } from 'react';

// third party libraries
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

// styles
import '../../css/style.css';

class Navbar extends Component {
    render() {
        const { username } = this.props
        console.log('username', username)
        return (
            <div className="nav-bar">
                <header>
                    <div id="branding">
                        <h1><span className="highlight">i</span>&nbsp;Reporter</h1>
                    </div>
                    <nav>
                        <ul>
                            {
                                username ? <li><a href="#" id="account-name">{
                                    username
                                }</a></li> : null
                            }

                            <li id="sign-out">
                                <Link to="/login">
                                    {
                                        username ? "sign out" : "sign in"
                                    }
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }


}

const mapStateToProps = state => state.authReducer;

export default connect(mapStateToProps, null)(Navbar);