// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estateexchange-3c480.firebaseapp.com",
  projectId: "estateexchange-3c480",
  storageBucket: "estateexchange-3c480.appspot.com",
  messagingSenderId: "774598215733",
  appId: "1:774598215733:web:e5dadb90aa1cbaeb61097c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
