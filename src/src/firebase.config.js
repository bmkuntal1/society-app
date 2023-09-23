import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC0Ooy5fcx6cp-q_Ii4w8QSp-mCx89UjxI",
//   authDomain: "society-app-19bee.firebaseapp.com",
//   projectId: "society-app-19bee",
//   storageBucket: "society-app-19bee.appspot.com",
//   messagingSenderId: "426047755256",
//   appId: "1:426047755256:web:cc11606af2c5dd46847c0d",
//   measurementId: "G-0M2CERPN6E"
// };

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL:import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);