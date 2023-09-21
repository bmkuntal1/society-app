import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0Ooy5fcx6cp-q_Ii4w8QSp-mCx89UjxI",
  authDomain: "society-app-19bee.firebaseapp.com",
  projectId: "society-app-19bee",
  storageBucket: "society-app-19bee.appspot.com",
  messagingSenderId: "426047755256",
  appId: "1:426047755256:web:cc11606af2c5dd46847c0d",
  measurementId: "G-0M2CERPN6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);