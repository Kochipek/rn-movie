import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3bxTlxLHT1NWim8nfmf62Z618tcyVnjU",
  authDomain: "rn-auth-aa7a1.firebaseapp.com",
  projectId: "rn-auth-aa7a1",
  storageBucket: "rn-auth-aa7a1.appspot.com",
  messagingSenderId: "452620969488",
  appId: "1:452620969488:web:dfa5e3acd0bb9fbce50c95",
  measurementId: "G-48P1YY5NJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;