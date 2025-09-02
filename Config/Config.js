// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpYF_R1_OFwRMEWIEsfsQ3c7TqNx3SYeI",
    authDomain: "ems-project-d8d1b.firebaseapp.com",
    projectId: "ems-project-d8d1b",
    storageBucket: "ems-project-d8d1b.firebasestorage.app",
    messagingSenderId: "48631673239",
    appId: "1:48631673239:web:03fc0668dfa8dfb8b0d4d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app)