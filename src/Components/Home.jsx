import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

function Home() {
    return(
        <div>
            <h1>Welcome to Journally!</h1>
            <h3><Link to="/dashboard">Log in</Link></h3>
        </div>
    )
}

export default Home;