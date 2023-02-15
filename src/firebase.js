import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXShLUAI668X5pdwNYSfVnKMgf1F-k5Xs",
  authDomain: "chat-3e3cc.firebaseapp.com",
  projectId: "chat-3e3cc",
  storageBucket: "chat-3e3cc.appspot.com",
  messagingSenderId: "612494024336",
  appId: "1:612494024336:web:0236fd273cb98269858215",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
