// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrDQRQ6yi4EWUjyRnHhY4dF4FyVcidcmI",
  authDomain: "survey-5c174.firebaseapp.com",
  projectId: "survey-5c174",
  storageBucket: "survey-5c174.appspot.com",
  messagingSenderId: "119586278121",
  appId: "1:119586278121:web:f9ce8cab0105760279be78",
  measurementId: "G-F7BVCGGCHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);