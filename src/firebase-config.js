// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZU9sFSXxBnPnTUU1s51nJrA87ljUQ8k",
  authDomain: "shopeact-web.firebaseapp.com",
  projectId: "shopeact-web",
  storageBucket: "shopeact-web.appspot.com",
  messagingSenderId: "677267299763",
  appId: "1:677267299763:web:980ebd4a4bd85d2d107fc6",
  measurementId: "G-FN30TXN1JT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
