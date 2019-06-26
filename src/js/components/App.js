import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from './home/Home';
import Login from './Login';
import Landing from './Landing';
import SignUp from './Signup';
import Incident from './Incident';


class App extends Component {
    render () {
        return (
            <Router>
                <Route exact path="/" component={ Landing } />
                <Route path="/home" component={ Home } />
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ SignUp } />
                <Route path="/incident" component={ Incident } />
            </Router>
        )
    }
}

export default App;
