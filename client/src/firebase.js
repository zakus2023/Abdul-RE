// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abdul-main-65df8.firebaseapp.com",
  projectId: "abdul-main-65df8",
  storageBucket: "abdul-main-65df8.appspot.com",
  messagingSenderId: "10218712399",
  appId: "1:10218712399:web:7fa5bb11db6fcb78d1a93a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);