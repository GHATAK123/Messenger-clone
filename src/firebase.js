import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBnMNagZIK0HxK02xVA_cxd5hdbme-wgJQ",
    authDomain: "messenger-clone-866d8.firebaseapp.com",
    databaseURL: "https://messenger-clone-866d8.firebaseio.com",
    projectId: "messenger-clone-866d8",
    storageBucket: "messenger-clone-866d8.appspot.com",
    messagingSenderId: "178650386434",
    appId: "1:178650386434:web:c473ef13c28d958ce7d71b",
    measurementId: "G-0PX6L8KSDC"

});

const db = firebaseApp.firestore();

export default db;
