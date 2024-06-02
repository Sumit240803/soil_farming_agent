// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9KliDPHPo3lnV_Rqepn4hne57BT4QR4c",
  authDomain: "soil-agent-50093.firebaseapp.com",
  projectId: "soil-agent-50093",
  storageBucket: "soil-agent-50093.appspot.com",
  messagingSenderId: "262376617121",
  appId: "1:262376617121:web:c9f11240109b36436face0",
  measurementId: "G-9SRM3RG01F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
