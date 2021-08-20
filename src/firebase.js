import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLNTIBmseY5zTtVnqNcJ4vIJRbJJQnELU",
    authDomain: "fir-394fc.firebaseapp.com",
    projectId: "fir-394fc",
    storageBucket: "fir-394fc.appspot.com",
    messagingSenderId: "14372157161",
    appId: "1:14372157161:web:80bf51b700fe6dd4aba278",
    measurementId: "G-62S5H3C96X"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};














