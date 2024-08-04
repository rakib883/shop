// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATaa0SIvZUSmgtL21z0URVJQkiWbHtnVQ",
  authDomain: "shop-4a9e5.firebaseapp.com",
  projectId: "shop-4a9e5",
  storageBucket: "shop-4a9e5.appspot.com",
  messagingSenderId: "655642142657",
  appId: "1:655642142657:web:42f6e2118da5968d7d7140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app