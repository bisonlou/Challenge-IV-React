import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Home from './home/Home';
import Login from './Login';
import Landing from './Landing';
import SignUp from './Signup';
import Incident from './Incident';


class App extends Component {
    render() {

        return (
            <switch>
                <Route exact path="/" component={Landing} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/incident" component={Incident} />
            </switch>
        )
    }
}

export default App;
