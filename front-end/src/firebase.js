// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC8saSjz73jrYopoQEQBtE-4Pt-wC2ztnM",
  authDomain: "ecommerce-5286a.firebaseapp.com",
  projectId: "ecommerce-5286a",
  storageBucket: "ecommerce-5286a.firebasestorage.app",
  messagingSenderId: "837609259279",
  appId: "1:837609259279:web:1b248f8ec401ed5b953e7a",
  measurementId: "G-9LHKF22H0L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 