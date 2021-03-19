import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAfKHSQSJsuP1JlE8z6RS89q5K7wdYOyMo",
        authDomain: "netflix-clone-ed491.firebaseapp.com",
        projectId: "netflix-clone-ed491",
        storageBucket: "netflix-clone-ed491.appspot.com",
        messagingSenderId: "887390406918",
        appId: "1:887390406918:web:27af7a7a010500371c3687",
        measurementId: "G-VTX6HZETVV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }

