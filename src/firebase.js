import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "",
    authDomain: "messenger-clone-866d8.firebaseapp.com",
    databaseURL: "",
    projectId: "messenger-clone-866d8",
    storageBucket: "messenger-clone-866d8.appspot.com",
    messagingSenderId: "178650386434",
    appId: "",
    measurementId: "G-0PX6L8KSDC"

});

const db = firebaseApp.firestore();

export default db;

