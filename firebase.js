// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs5VK7OVQ39v1hazIycRfpCwi8KQnZRuA",
  authDomain: "login-register-5243e.firebaseapp.com",
  projectId: "login-register-5243e",
  storageBucket: "login-register-5243e.firebasestorage.app",
  messagingSenderId: "483051599257",
  appId: "1:483051599257:web:8ad3c921da0d30f08c8f08",
  measurementId: "G-6XP3L3C8YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);