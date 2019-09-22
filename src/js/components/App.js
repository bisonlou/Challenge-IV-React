import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Login from './Login';
import Home from './Home';
import SignUp from './Signup';
import Landing from './Landing';
import Incident from './Incident';
import DeleteIncident from './IncidentDelete';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Route path="/home" render={props => <Home {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <SignUp {...props} />} />
        <Route path="/incident" render={props => <Incident {...props} />} />
        <Route path="/confirm_delete" render={props => <DeleteIncident {...props} />} />
      </BrowserRouter>
    );
  }
}

export default App;
