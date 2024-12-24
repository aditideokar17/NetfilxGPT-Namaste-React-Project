// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7067M8--_O0L98yaB1uHG91tOLXTaMb0",
  authDomain: "netflixgpt-7c900.firebaseapp.com",
  projectId: "netflixgpt-7c900",
  storageBucket: "netflixgpt-7c900.firebasestorage.app",
  messagingSenderId: "841398552416",
  appId: "1:841398552416:web:8adce17832b4781904c005",
  measurementId: "G-G9VQW8TF8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();