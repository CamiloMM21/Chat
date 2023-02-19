import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtGj0zcbZiZBbeaz-G254e0nsd9g-rm10",
    authDomain: "commerce-max-f5637.firebaseapp.com",
    projectId: "commerce-max-f5637",
    storageBucket: "commerce-max-f5637.appspot.com",
    messagingSenderId: "291031635060",
    appId: "1:291031635060:web:03f25c2c06df35a785ed21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);