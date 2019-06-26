import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../css/style.css';

class Navbar extends Component {

    render() {
        let username = this.props.username
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

                            <li id="sign-out"><Link to="/login">{
                                username ? "sign out" : "sign in"
                            }</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }


}

export default Navbar;