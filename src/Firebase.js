import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBKPK8A-h4umluAtHjlY0VPkssRdt6rio",
  authDomain: "food-dx.firebaseapp.com",
  projectId: "food-dx",
  storageBucket: "food-dx.appspot.com",
  messagingSenderId: "503662140437",
  appId: "1:503662140437:web:4f26b8f0c6cefcd208c21c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {app , auth , db}
