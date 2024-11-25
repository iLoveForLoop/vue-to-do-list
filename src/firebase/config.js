import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcX6nXpN5BILoxGIzNFiWTb9V83PzMLkg",
  authDomain: "todo-list-888e8.firebaseapp.com",
  projectId: "todo-list-888e8",
  storageBucket: "todo-list-888e8.firebasestorage.app",
  messagingSenderId: "187340137331",
  appId: "1:187340137331:web:ded9cea5bddd258cd59b06",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
