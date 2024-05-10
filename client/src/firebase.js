// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b3481.firebaseapp.com",
  projectId: "mern-auth-b3481",
  storageBucket: "mern-auth-b3481.appspot.com",
  messagingSenderId: "799139650182",
  appId: "1:799139650182:web:a936bb7ed5a2ee09974f07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);