// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR5doEP_x5dQm4nsJSjxtl6xMRv-bKIw8",
  authDomain: "login-clean-track.firebaseapp.com",
  projectId: "login-clean-track",
  storageBucket: "login-clean-track.firebasestorage.app",
  messagingSenderId: "50817584640",
  appId: "1:50817584640:web:e805f0ad0b8102198d12e5",
  measurementId: "G-TGBGB7GN20"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase;