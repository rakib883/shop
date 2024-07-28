// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc7DR-Kv29PRiVqYvnqi_vLcAgi7pC31o",
  authDomain: "bazar-9dcb3.firebaseapp.com",
  projectId: "bazar-9dcb3",
  storageBucket: "bazar-9dcb3.appspot.com",
  messagingSenderId: "436423897389",
  appId: "1:436423897389:web:f3b690366760bb3074e3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app