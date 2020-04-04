import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA5p9oeVPpwC16EplJsS2-QeGu8bWJGrqU",
    authDomain: "todoist-9aa93.firebaseapp.com",
    databaseURL: "https://todoist-9aa93.firebaseio.com",
    projectId: "todoist-9aa93",
    storageBucket: "todoist-9aa93.appspot.com",
    messagingSenderId: "1038162357040",
    appId: "1:1038162357040:web:4eb5da4bec92d788def6f5",
    measurementId: "G-E02R5K7P34"
});

export { firebaseConfig as firebase };