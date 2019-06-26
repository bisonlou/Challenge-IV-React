import React, { Component } from 'react';
import Navbar from '../Navbar'
import HomeGraphs from './HomeGraphs'
import Tables from './Tables'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    componentWillMount() {

        this.setState({
            username: this.props.location.state.username
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    username={this.state.username}
                />
                <HomeGraphs />
                <Tables />
            </div>
        )
    }
}

export default Home;