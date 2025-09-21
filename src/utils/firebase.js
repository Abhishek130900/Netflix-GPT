// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYUcVbTZ54VmiKiZ9YDdKVELMHddLLIp4",
  authDomain: "abhishek-netflix-fcf8f.firebaseapp.com",
  projectId: "abhishek-netflix-fcf8f",
  storageBucket: "abhishek-netflix-fcf8f.firebasestorage.app",
  messagingSenderId: "540190693898",
  appId: "1:540190693898:web:04f4e37e1eb684d693ddf3",
  measurementId: "G-ESNLG7V7GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();