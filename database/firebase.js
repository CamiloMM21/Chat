import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAo0fBjOW4MHXxYhlziTj-EOYh9l3Y3Ok",
    authDomain: "prueba-eaa1b.firebaseapp.com",
    projectId: "prueba-eaa1b",
    storageBucket: "prueba-eaa1b.appspot.com",
    messagingSenderId: "779166975375",
    appId: "1:779166975375:web:7f9cf2e1c28908c7ddb7fa",
    measurementId: "G-QV7WSYGPMF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
