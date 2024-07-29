// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwFh3yUpWnv2iVhAXGpovkazlTiuU2VhA",
  authDomain: "ecommerceweb0786.firebaseapp.com",
  projectId: "ecommerceweb0786",
  storageBucket: "ecommerceweb0786.appspot.com",
  messagingSenderId: "1003662777854",
  appId: "1:1003662777854:web:cd73456add24a0247eb4af",
  measurementId: "G-QELC2RHPSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app); 

export {fireDB , auth } ;