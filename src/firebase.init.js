// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJaXw9Wc_lLUiaX6Zb60XXEsXdlOQ0jY",
  authDomain: "biycle-inventory.firebaseapp.com",
  projectId: "biycle-inventory",
  storageBucket: "biycle-inventory.appspot.com",
  messagingSenderId: "1035628110932",
  appId: "1:1035628110932:web:01cdf2bc95beed296839c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;