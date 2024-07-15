// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAZ1v3OWQwC_jrryUdQzRa-8Ruec1WY_t0",
    authDomain: "login-8dd8a.firebaseapp.com",
    projectId: "login-8dd8a",
    storageBucket: "login-8dd8a.appspot.com",
    messagingSenderId: "883466658417",
    appId: "1:883466658417:web:a7ab872e951d790f4e71d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };