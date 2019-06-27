// react
import React from 'react';

// components
import Navbar from '../Navbar'
import HomeGraphs from './HomeGraphs'
import Tables from './Tables'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeGraphs />
            <Tables />
        </div >
    )
}

export default Home;
