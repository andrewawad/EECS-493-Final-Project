import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import {Redirect} from 'react-router-dom';



var firebaseConfig = {
  apiKey: "AIzaSyBkoe91QFg3mf81WsmPONkcjYtAf1y7QVY",
  authDomain: "journally-11039.firebaseapp.com",
  databaseURL: "https://journally-11039.firebaseio.com",
  projectId: "journally-11039",
  storageBucket: "journally-11039.appspot.com",
  messagingSenderId: "208597094523",
  appId: "1:208597094523:web:4e0fcb5ce900239e3252de",
  measurementId: "G-3QLMFB0SBV"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;



const db = firebase.firestore();
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const authentication ={
  isAuthenticated: false,
  signOut:()=>{
    auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      return(error)
      // An error happened.
    });

  },
  signInWithGoogle: () => {

  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user.uid)
    if (res.additionalUserInfo.isNewUser==true){
    return db.collection('users').doc(res.user.uid).set({
    });
  }
  })
  .then(() => {
  })
  .catch((error) => {
    throw error
  })
  }

}
