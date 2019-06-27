import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './js/components/App'
import store from '../src/js/store'
import history from './history';
import { Router } from "react-router-dom";


ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'))
