import React, { Component, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import '../style.css';
import sitting_girl from '../images/sitting_girl.png';
import song_girl from '../images/song_girl.png';
import texting_girl from '../images/texting_girl.png';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBkoe91QFg3mf81WsmPONkcjYtAf1y7QVY",
    authDomain: "journally-11039.firebaseapp.com",
    databaseURL: "https://journally-11039.firebaseio.com",
    projectId: "journally-11039",
    storageBucket: "journally-11039.appspot.com",
    messagingSenderId: "208597094523",
    appId: "1:208597094523:web:4e0fcb5ce900239e3252de"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Home() {
    const [user] = useAuthState(auth);

    return(
        <div>

            <img src={sitting_girl} class = 'sitting_girl' alt="Sitting Girl"></img>
            <img src={song_girl} class = 'song_girl' alt="Song Girl"></img>
            <img src={texting_girl} class = 'texting_girl' alt="Texting Girl"></img>

            <h1 class = 'journal_title'>Journally!</h1>
            
            <div class = 'middle_section'>
                <h1 class = 'metrics_life'>Metrics, for your life</h1>
                <div>
                    {<SignIn />}
                </div>
                <div>
                    {<SignOut />}
                </div>
                <div class = 'sign_in'> 
                    <Link to="/dashboard"  class = 'link'> Request Access </Link>
                </div>
            </div>
        </div>
    )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default Home;