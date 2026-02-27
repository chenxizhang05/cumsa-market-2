// ─────────────────────────────────────────────────────────────────────────────
// PASTE YOUR FIREBASE CONFIG HERE
// (You'll get these values in Step 3 of the setup guide)
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNlkfzZdPy4Tltn9A6YdGTFyC1dcHW-ns",
  authDomain: "cumsa-market-d5281.firebaseapp.com",
  databaseURL: "https://cumsa-market-d5281-default-rtdb.firebaseio.com",
  projectId: "cumsa-market-d5281",
  storageBucket: "cumsa-market-d5281.firebasestorage.app",
  messagingSenderId: "1079519585234",
  appId: "1:1079519585234:web:6ce9a84f5b5dd68b459e0b"
}; 

const app  = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);   // user accounts, portfolios, trades
export const rtdb = getDatabase(app);    // live market prices + chat
