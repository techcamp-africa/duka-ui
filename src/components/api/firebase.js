import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCfMaha0oTkJVCXfTl38Xu6coUU_h5j6V0",
    authDomain: "duka-fce85.firebaseapp.com",
    projectId: "duka-fce85",
    storageBucket: "duka-fce85.appspot.com",
    messagingSenderId: "970200531011",
    appId: "1:970200531011:web:f67addfa6f05cc1200d4f6",
    measurementId: "G-DDWQVZWMNV"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth};
export default db;

