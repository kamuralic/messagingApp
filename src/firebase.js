import firebase from "firebase";

//configuration keys for this app from firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXat39bmuC7zpcs6_Mit-9CpHUDjTG7MY",
  authDomain: "message-application-7c44b.firebaseapp.com",
  projectId: "message-application-7c44b",
  storageBucket: "message-application-7c44b.appspot.com",
  messagingSenderId: "399173895211",
  appId: "1:399173895211:web:abbb346f6f331d5ec0966e",
  measurementId: "G-NMZ1LTRK1B",
};

// code to initialise app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// invoking our database
const db = firebaseApp.firestore();

// invoking our authentication service

const auth = firebase.auth();

// google auth provider setup
const provider = new firebase.auth.GoogleAuthProvider();

//exporting our instances so that we can use them any where in our project
export { auth, provider };
export default db;
