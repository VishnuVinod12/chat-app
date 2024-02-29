// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL9_snLoWkmzJ3qbgt1HVe4t9Ow3klXG8",
  authDomain: "react-chat-app-7ea42.firebaseapp.com",
  projectId: "react-chat-app-7ea42",
  storageBucket: "react-chat-app-7ea42.appspot.com",
  messagingSenderId: "167548160376",
  appId: "1:167548160376:web:33fc75a9a1dbc444f3a08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
