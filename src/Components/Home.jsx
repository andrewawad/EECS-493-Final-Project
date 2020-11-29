import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style.css';
import sitting_girl from '../images/sitting_girl.png';
import song_girl from '../images/song_girl.png';
import texting_girl from '../images/texting_girl.png';

function Home() {
    return(
        <div>

            <img src={sitting_girl} class = 'sitting_girl' alt="Sitting Girl"></img>
            <img src={song_girl} class = 'song_girl' alt="Song Girl"></img>
            <img src={texting_girl} class = 'texting_girl' alt="Texting Girl"></img>

            <h1 class = 'journal_title'>Journally!</h1>
            
            <div class = 'middle_section'>
                <h1 class = 'metrics_life'>Metrics, for your life</h1>
                <div class = 'sign_in'>  
                    <Link to="/dashboard"  class = 'link'> request access </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;