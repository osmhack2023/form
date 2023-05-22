// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHc_Hd4gu006i1mBTm6XsSCaACq5rH47A",
  authDomain: "osmhack-94567.firebaseapp.com",
  projectId: "osmhack-94567",
  storageBucket: "osmhack-94567.appspot.com",
  messagingSenderId: "994378745947",
  appId: "1:994378745947:web:0897f6632d4c1f2ac6177e",
  measurementId: "G-Q7X708B121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
// site key: 6LeNOiImAAAAAM9eFE8iwWHm2XBDbnsINRLpdQW4
// secret key :6LeNOiImAAAAAKs6bXfgjvPgos-jEvDb9pZVGAUV
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
