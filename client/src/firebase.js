// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBULvfjmp6Z_pBHnk4f4OAYBXQAdor4U5k",
  authDomain: "vicky-proj.firebaseapp.com",
  projectId: "vicky-proj",
  storageBucket: "vicky-proj.appspot.com",
  messagingSenderId: "581081869899",
  appId: "1:581081869899:web:61bc4726fce06c0e1ba7ce",
  measurementId: "G-NQXMSGQQR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  {app}