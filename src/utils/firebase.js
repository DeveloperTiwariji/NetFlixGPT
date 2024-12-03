// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGkYE4VFSVY9P50z-9pCOgXUEigKuPW1A",
  authDomain: "netflixgpt-28278.firebaseapp.com",
  projectId: "netflixgpt-28278",
  storageBucket: "netflixgpt-28278.firebasestorage.app",
  messagingSenderId: "91755848246",
  appId: "1:91755848246:web:f9e2dc5ed1e282a4612e97",
  measurementId: "G-55767GG9HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();