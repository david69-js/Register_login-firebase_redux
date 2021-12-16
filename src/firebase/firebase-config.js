import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAdBQyaM1mk8pmtmBLJ20QDXnl3-soJ01E",
    authDomain: "react-login-4e14c.firebaseapp.com",
    projectId: "react-login-4e14c",
    storageBucket: "react-login-4e14c.appspot.com",
    messagingSenderId: "36003582778",
    appId: "1:36003582778:web:9cc35c3ee477abed013603",
    measurementId: "G-KTGYQPXTYT"
  
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();



export{
    db,
    googleAuthProvider
}
