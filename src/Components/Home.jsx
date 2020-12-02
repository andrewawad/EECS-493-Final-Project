import React, { useCallback,useContext, Component } from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import '../style.css';
import sitting_girl from '../images/sitting_girl.png';
import song_girl from '../images/song_girl.png';
import texting_girl from '../images/texting_girl.png';
import analytics from '../images/analytics.png';

import {authentication} from "./services/firebase";
import {AuthContext} from "../Auth"


const Home = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        try {
          authentication.signInWithGoogle()
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
      return <Redirect to="/dashboard" />;
    }


    return(
        <div>
          
          <div class = 'analytics_wrapper'>
            <img src={analytics} class = 'analytics' alt="Analytics"></img>
          </div>

            {/* <img src={sitting_girl} class = 'sitting_girl' alt="Sitting Girl"></img>
            <img src={song_girl} class = 'song_girl' alt="Song Girl"></img>
            <img src={texting_girl} class = 'texting_girl' alt="Texting Girl"></img> */}

            <h1 class = 'journal_title'>Journally!</h1>
            
            <div class = 'middle_section'>
                <div class = 'metrics_life_wrapper'>
                  <h1 class = 'metrics_life'>Metrics, for your life</h1>
                </div>

                <div class = 'sign_in_wrapper'>
                  <div class = 'sign_in'>  
                      <div  class = 'link' onClick={handleLogin}> sign in </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);

