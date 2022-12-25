// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCQjiL0WYN2DLW-NOT0lrBLwB1d5EyrXp0",
  authDomain: "example-firebase-a1506.firebaseapp.com",
  projectId: "example-firebase-a1506",
  storageBucket: "example-firebase-a1506.appspot.com",
  messagingSenderId: "659892086628",
  appId: "1:659892086628:web:933d9b4fecfe9025dfbc71",
  measurementId: "G-PGCXWW6BKP",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
