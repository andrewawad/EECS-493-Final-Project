import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";



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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user.uid)
    if (res.additionalUserInfo.isNewUser==true){
    return db.collection('users').doc(res.user.uid).set({
    });
  }
    
  })
  .then(() => {})
  .catch((error) => {
    console.log(error.message)
  })
}