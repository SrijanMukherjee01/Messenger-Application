import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN6iPxGdJxk1hOuyvQKEstvYDi_NOwydM",
  authDomain: "whatsapp-clone-9b069.firebaseapp.com",
  projectId: "whatsapp-clone-9b069",
  storageBucket: "whatsapp-clone-9b069.appspot.com",
  messagingSenderId: "76610270461",
  appId: "1:76610270461:web:80e934988b90d1b03b3a94",
  measurementId: "G-GKRP2SVHZS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
