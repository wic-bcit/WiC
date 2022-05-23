// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4AZhHkrNJuzv7bOfC-TA7DLoLKuBCj74",
  authDomain: "wicwebiste.firebaseapp.com",
  databaseURL: "https://wicwebiste-default-rtdb.firebaseio.com",
  projectId: "wicwebiste",
  storageBucket: "wicwebiste.appspot.com",
  messagingSenderId: "892492600532",
  appId: "1:892492600532:web:42c6a635e6a3d829ae9741",
  measurementId: "G-XW494B0XFV",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
