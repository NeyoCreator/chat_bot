import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtnqElXEBRITMZ0bEZEk91POAggC04G8U",
  authDomain: "azania-5295e.firebaseapp.com",
  projectId: "azania-5295e",
  storageBucket: "azania-5295e.appspot.com",
  messagingSenderId: "364416607302",
  appId: "1:364416607302:web:9b7b9c43eff96b17dcd647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};