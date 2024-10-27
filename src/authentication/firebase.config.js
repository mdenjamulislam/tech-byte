// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6hEXdZC1DqErVh9yt6kzD4M4kU5z03JA",
    authDomain: "learning-project-c1629.firebaseapp.com",
    projectId: "learning-project-c1629",
    storageBucket: "learning-project-c1629.appspot.com",
    messagingSenderId: "232733356062",
    appId: "1:232733356062:web:3b40b320575362c502fe0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;