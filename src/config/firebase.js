// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBisCiqZw4i1HU5pdEDKAe8jYe5zeITMVo",
  authDomain: "docconnect-dc825.firebaseapp.com",
  projectId: "docconnect-dc825",
  storageBucket: "docconnect-dc825.firebasestorage.app",
  messagingSenderId: "440098399249",
  appId: "1:440098399249:web:59ba86b022cb73cccfbdb0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
