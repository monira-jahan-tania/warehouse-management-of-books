// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrOFB0RuGyxyGQY-RChyR9mi6SBcFdC3s",
    authDomain: "warehouse-management-b6820.firebaseapp.com",
    projectId: "warehouse-management-b6820",
    storageBucket: "warehouse-management-b6820.appspot.com",
    messagingSenderId: "495232180928",
    appId: "1:495232180928:web:63a9e3a8fd20ab3eca0325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;