// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyy02G6VunQvHwfQUtEYA1BKqDHTknGI",
  authDomain: "brand-shop-a31e9.firebaseapp.com",
  projectId: "brand-shop-a31e9",
  storageBucket: "brand-shop-a31e9.appspot.com",
  messagingSenderId: "1039095101800",
  appId: "1:1039095101800:web:fc1e7c5f624a0dbf5c7edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;