import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqGCGKt-Q-BE9UBQRQDgoUFBImR7fn41w",
  authDomain: "clone-dcc22.firebaseapp.com",
  projectId: "clone-dcc22",
  storageBucket: "clone-dcc22.appspot.com",
  messagingSenderId: "92109364074",
  appId: "1:92109364074:web:b6786998ea09e4c04e2313",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
