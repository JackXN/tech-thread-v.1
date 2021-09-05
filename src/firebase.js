/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOKyOmkmJMeSkOYwEDpXVJ8gCwAHwzAs0",
    authDomain: "techthread-v1.firebaseapp.com",
    projectId: "techthread-v1",
    storageBucket: "techthread-v1.appspot.com",
    messagingSenderId: "779110798696",
    appId: "1:779110798696:web:3deecf9e2a9c77910832dd",
    measurementId: "G-4KYGRY82BG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;