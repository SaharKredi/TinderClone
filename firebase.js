// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDkpOSQBE-Vid2MYC5v-x8p-wK5pV7EJik",
 authDomain: "tinderclone-ea0da.firebaseapp.com",
 projectId: "tinderclone-ea0da",
 storageBucket: "tinderclone-ea0da.appspot.com",
 messagingSenderId: "456976359846",
 appId: "1:456976359846:web:a268169fdfb9595fa96f67",
 measurementId: "G-E81SMWKFM6"
};

// apiKey: "AIzaSyCBJ1RWuFv_nI5VIwNDEBDbDDHTRtf4xVc",
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db, };